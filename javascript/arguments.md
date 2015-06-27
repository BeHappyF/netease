函数属性 & argments

function foo(x,y,z) {
	arguments.length;	//2
	arguments[0]; 		//0
	arguments[0] = 10;
	x; 								//change to 10

	arguments[2] = 100;
	z;	 							//still undefined!!
	arguments.callee === foo; //true
}

foo(1,2);
foo.length; 		//3
foo.name; 			//'foo'

分析：函数也是对象，所以会有属性和方法：
length返回函数的形参；
name返回函数的名称，字符串；

arguments是函数的里一个对象，他是一个类数组的对象。具有length属性，可以返回函数的实参个数。但是他没有slice(),concat()等数组方法，可以通过索引的方式访问实参。这也是arguments和数组相类似的地方。

可通过改变的arguments的参数改变实际传入的参数，两者是动态绑定的。但是由于存在实参个数小于形参个数，此时不能够通过改变arguments中的参数去改变实际未传入的参数。arguments中的参数只与实参绑定。所以当实参个数大于形参的时候，argments也是能以一一绑定的。

例：
function foo (x,y) {
	arguments.length;
	arguments[3] = 100; 		
	console.log(arguments[3]);		//100
}

foo(1,2,3,4);
foo.length;											//2
foo.name;												//"foo"

注:严格模式下是不能够使用arguments.callee方法。并且arguments变成了实参的一个静态副本，所以不存在绑定关系。




apply/call方法（浏览器）

function foo(x,y) {
	console.log(x,y,this);
}

foo.call(100,1,2);			//1,2,Number(100)
foo.apply(true,[3,4]);	//3,4,Boolean(true)
foo.apply(null);				//undefined,undefined,window
foo.apply(undefined);		//undefined,undefined,window

分析：call()和apply()方法都会将第一个参数当做对象处理，如果不是对象而是基本类型，会将其转化为对应的包装类。

如果第一个参数是null或undefind，那么表达的意思是不传入这个值，那么默认认为是传入window。容易理解：因为当前的执行环境是window。

function foo(x,y) {
	'use strict';
	console.log(x,y,this);
}

foo.apply(null);			//undefined * 2, null
foo.apply(undefined); //undefined * 3















bind方法

this.x = 9;
var module = {
	x:81,
	getX:function() {return this.x;}
};

module.getX();   //81

var getX = module.getX;
getX();					 //9

var boundGetX = getX.bind(module);
boundGetX();  	 //81

分析：第一个好理解：对象方法中的this，直接调用会将this指向当前对象。

第一个其实不难：javascript中执行一个方法是需要一个运算符().并且方法同样是对象，方法名知识一个索引，所以与方法名之间松散耦合。所以var getX = module.getX;只是将这份索引复制了一份，现在有两个方法名调用这个方法。而真正执行方法时，是在全局作用域下，getX()调用方法的完整形式是window.getX()。

第三个：bind绑定其第一个参数作为方法中的this值，并且返回绑定后的方法给变量boundGetX.所以虽然在全局作用域下，但this被绑定，照常能够返回81而不是9.


bind与currying

function add(a,b,c) {
	return a + b + c;
}

var func = add.bind(undefined, 100);
func(1,2); 	//103

var func2 = func.bind(undefined, 200);
func2(10); 	//310

分析：例子中的bind的使用不再是this的绑定，而是参数的绑定。所以第一个参数不想要绑定任何对象，所以可以使null或者undefined。而第二个参数则是绑定了函数的一个参数，然后接下来绑定第二个参数。结果就是十分灵活的使用这个函数，减少了重复参数的输入。

例子：

function getConfig(colors, size, otherOptions) {
	console.log(colors, size, otherOptions);
}

var defaultConfig = getConfig.bind(null, "#CC0000", "1024 * 768");

defaultConfig("123");		//#CC0000 1024 * 768 123
defaultConfig("456");		//#CC0000 1024 * 768 456

由于前面的属性大多相同，所以避免重复输入，可以将前者绑定，最后的参数大多不同，则不绑定，调用过程中传入即可。



bind与new 

function foo() {
	this.b = 100;
	return this.a;
}

var func = foo.bind({a:1});

func();				//1
new func();		//{b:100}

分析：第一个直接调用绑定了this值的函数，即使在全局作用域下的调用，同样返回{a:1}.a.再深入一点，其实这时候this,b = 100;这条语句同样起了作用。他将在{a:1}这个对象当中添加一个b属性，并赋值给100。


第二个则比较麻烦：通过new运算符调用，除非return一个对象，否则this会被初始化为一个默认的空对象并被返回，这个空对象的原型是foo.prototype。本例当中就是这样的情况，return this.a;会被忽略。而第一条赋值语句则是给这个空对象增加一个b属性。最后this，也就是这个不再空的对象被返回。所以说，bind方法绑定的this会被忽略。


求证：
function foo() {
	this.b = 100;
	return this.a;
}

var a = {a:2};
var func = foo.bind(a);
a.hasOwnProperty('a');	//true
a.hasOwnProperty('b');	//true




bind方法模拟

if(!Function.prototype.bind) {
	Function.prototype.bind = function(oThis) {
		if (typeof oThis !== 'function') {
			throw new TypeError("error type input");
	  }
	  var aArgs = Array.prototype.slice.call(arguments, 1),
	  		fToBind = this,
	  		fNOP = function() {},
	  		fBound = function () {
					return fToBind.apply(this instanceof fNOP? this:oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
	  		};
	  		fNOP.prototype = this.prototype;
	  		fBound.prototype = new fNOP();

	  		return fBound;
	};
}

映射上面的代码：

var func = foo.bind({a:3});

oThis  ->   {a:3}
foo		 ->   this(第一个)
fBound ->   func


代码解读：
首先判断浏览器是否支持bind()方法，ecmascript5才推出bind()，IE9以下都不支持这个方法。

如果不支持，就认为添加一个这样的方法。并传入参数。这里就有一个坑：其实传入的不一定只有一个参数，这里同样可以实现bind的科里化功能（即绑定前几个参数，后续的调用只需要传入剩下的参数).但是本例当中并没有实现多个参数传入的功能。

接下来判断传入的是否是函数，不是则报类型异常错误。

声明变量，分别表示：传入参数中后续的实参，不包括第一个函数对象；被绑定的函数对象；空对象。

接下来对prototype的操作就是为了实现new操作符调用这样一个绑定的函数对象。即上述的：new func();因为需要返回一个以foo.prototype为原型的对象。所以在b人工的bind方法当中，需要人为的创建出一个空对象，并将其原型设定为this.prototype.
还有一种简单的书写方法替代两个语句：
fBound.prototype = Object.create(this.prototype);


最后来讲一讲fBound方法，作为一个匿名函数，其实质是一个闭包。返回一个被绑定this之后的方法，并且同样具有科里化的作用。这里对this instanceof fNOP 的判断有如下作用：
如果直接调用绑定this后的方法，那么它显然就不是fNOP这样的空对象，其值为oThis，也就是要绑定this的函数对象。但如果是用new调用这个方法，在不返回对象的函数对象中，返回this。而this被默认创建为一个空对象，所以就是fNOP了。然后需要设定其原型属性。也就是后面语句中的操作目的。

两个this:第一个是被绑定的对象,即：foo
第二个在fBound内部则是作为返回值的对象。即：func

两个arguments:第一个是bind的参数，这个参数可以实现科里化。即绑定的参数列表。
第二个则是返回对象的arguments，这个就是科里化中后续传入的参数列表。









