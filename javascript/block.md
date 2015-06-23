javascript没有块级作用域。只有函数作用域，全局作用域，eval作用域。

函数作用域：
function foo() {
	var a = b = 1;
}
foo();  //有没有这句没关系

console.log(typeof a);	//undefined
console.log(typeof b); 	//number

原因：连续赋值的方式只会将第一个数字定义为函数作用域中，之后的都是隐式定义于全局作用域，所以第二个访问到了值。

function foo() {
	var a=1,b=1;
}

console.log(typeof a);	//undefined
console.log(typeof b);	//undefined

这种方式就能够将两个变量定义在函数作用域中。当然，
var a=1;var b=1;这种方式更是可以。


函数声明
function foo() {
	//do sth
	return true;
}

函数表达式
var func = function() {
	//do sth
};

区别：函数声明方式会被预先处理，或者叫函数前置。所以在函数声明前面调用这样的函数也是被允许的。函数表达式则不行。


对于严格模式的一些坑：
1.声明使用严格模式就是在最先的函数或全局使用'use strict';或者"use strict"; 这样的语句。这样是为了向下兼容，老的IE浏览器不支持严格模式，所以这样的括起来就不会被解释。
2.其实声明可以不写在第一行，在他的前面可以写一些，'abc';或者说其他的指令，当然，如果讲var变量声明这样的语句写在前面则是不可以的。

严格模式的区别：
1.不允许用with;(会报syntaxError)
2.不允许未声明的变量被赋值(就是指在函数内部设置全局作用域的变量不被允许了)
3.arguments变为参数的静态副本

在普通模式下：
!function(a) {
	arguments[0] = 100;
	console.log(a);
}(1);
这样会将a的值变成100

!function(a) {
	arguments[0] = 100;
	console.log(a);
}();
坑：这里我不传入值，那么a的值不能够被修改，值为undefined.

!function(a) {
	arguments[0] = 100;
	console.log(a);
}(undefined);
深入：这里我传入一个undefined的值，a的值又能够被修改了。这是javascript弱类型的特点，变量的类型是可以被修改的。

!function(a) {
	'use strict';
	arguments[0] = 100;
	console.log(a);
}(1);
理解：变成静态副本的效果就是arguments与传入的值之间没有了联系。修改arguments内的值不修改参数的值。
arguments内储存参数传入时的值。

!function(a) {
	'use strict';
	arguments[0].x = 100;
	console.log(a.x);
}({x:1});
深入：这种以对象的方式传入，还是可以被修改的。因为修改的是对象的属性。

4.delete参数、函数名报错

例：
!function(a) {
	console.log(delete a);
}(1);
返回false，但是不报错。但是在严格模式下则会报SyntaxError错误。

5.delete不可配置的属性会报错,报typeError（原来只是返回false)

!function(a) {
	var obj = {};
	Object.defineProperty(obj,
	'a',{configurable:false;});
	console.log(delete obj.a);
}(1);

6.对象字面量重复属性报错（SyntaxError）

!funtion (a) {
	var obj = {x:1,x:2};
	console.log(obj.x);  //2
}

7.禁止八进制字面量（SyntaxError）

!function (a) {
	console.log(0123);
}

8.eval,arguments变为了关键字，不能作为函数，变量名（SyntaxError）

9.eval独立作用域

!function () {
	eval('var evalVal = 2');
	console.log(typeof evalVal);  //number,严格模式为undefined
}






