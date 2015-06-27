最开始附上视频链接：http://www.imooc.com/video/6429

1.get/set方法与this

function modulus(){
	return Math.sqrt(this.re * this.re + this.im * this.im);
}

var o = {
	re : 1,
	im : -1,
	get phase() {
		return Math.atan2(this.im, this.re);
  }
};

Object.defineProperty(o,'modulus', {
	get:modulus,enumerable:true,configurable:true
});

console.log(o.phase, o.modulus);  //logs -0.78 1.4142

总结：通过get/set方法中的this同样能够转化为其所在的对象。设定get方式很多：在字面量方法中直接定义；通过defineProperty()定义的get,且因为javascript中函数同样是对象，所以其属性名只是一个函数的指针，所以可以通过松散耦合的方式给get绑定一个以函数生命方式定义的函数。






2.全局的this（浏览器）

var a = 3;
this.b = 2;

console.log(this === window);
console.log(this.document === document);

a;			//3
this.a;	//3







3.一般函数的this（浏览器）

function f1() {
	return this;
}

f1() === window;  //true

严格模式下：

function f2 () {
	'use strict';
	return this;
}
f2() === undefined;	//true






4.作为对象方法的函数的this

例一：
var o = {
	prop: 37,
	f:function() {
		return this.prop;	
  }
};

console.log(o.f());	//logs 37

注：this被替换为调用函数的对象。

例二：
var o = {prop: 37};

function independent() {
	return this.prop;
}

o.f = independent;

console.log(o.f());	//37

总结：只要是作为对象方法的函数即可。是由哪种方式定义出的函数没有区别。






5.对象原型链上的this

var o = {f:function() {return this.a + this.b;}}
var p = Object.create(o);
p.a = 1;
p.b = 2;

console.log(p.f());		//3

总结：方法是原型链上的，而属性是对象本身的。调用原型链的方法同样可以将this值转化为调用的对象。







6.构造器中的this

function MyClass() {
	this.a =  37;
}
MyClass();							//window
var o = new MyClass();
console.log(o.a); 			//37

o.hasOwnProperty('a');	//true
MyClass.prototype.hasOwnProperty('a');	//false

总结：构造器方法名首字母大写。以便区分普通函数。如果只是普通的调用构造器函数，和普通函数一样，this会转化为window。

但是通过new关键字加上一个构造器创建出实例：this会指向一个原型为MyClass.prototype的空对象。调用的时候有了构造器中的属性赋值，空对象也就有了属性。如果没有return语句，或者说return的是基本类型的返回值，那么将this（也就是这个对象）作为返回值并赋值给实例。效果就像相当于this转化为了o实例。


function C2() {
	this.a = 27;
	return {x:232};
}

o = new C2();
console.log(o.a);		//232

分析：这个例子当中有了return语句，并且return一个对象。那么o就是返回的对象。this不再是o.









7.call/apply方法与this

function add(c, d) {
	return this.a + this.b + c + d;
}

var o = {a:1,b:2};
add.call(o,5,3);			//1 + 2 + 5 + 3 =11

add.apply(o,[12,23]); //1 + 2 + 12 + 23 =38

总结：例子当中通过call,apply指定函数对象的this，能够提高函数的复用。两者的区别在与call的参数除this的指定值外通过一个个列举的方式传入，而apply则是除this之外通过数组或者是类数组的arguments对象传入。


function bar() {
	console.log(Object.prototype.toString.call(this));
}
bar.call(7);		//"[object Number]"

总结：这是通过call/apply的一个简单应用。通过Object.prototype.toString()的方式判断数据类型有点长，所以通过函数封装调用能够方便很多。
而且可以得知，call/apply可以只传入一个参数，即仅指定函数对象的this。






8.bind方法与this（IE9+才会有）

function f() {
	return this.a;
}

var g = f.bind({a:'test'});
console.log(g());	//test，g()是函数对象

分析：通过bind方法绑定，可实现一次绑定多次调用的机制。bind的参数作为this指向的对象。而且赋予的值g同样是一个函数对象。

var o = {a:27, f:f, g:g};
console.log(o.f(),o.g());		//27 test

分析:作为对象方法f中的this，调用是会将this指向调用的对象。所以this指向的对象o,借此访问到了属性a的值。

但是对象方法g，是通过bind方法绑定了this的值（即bind方法的对象参数），即this被替换为了{a:'test'}对象。所以返回的值为"test".不存在this的指向问题了。

关于bind,理解不深，可能有偏差。望交流，纠正！
我认为：
function g() {
	return {a:"teset"}.a;
}



















