Number,Boolean,String这三种原始类型有其包装类型。如果对基本类型做相关的对象操作，javascript会智能的生成相关的临时包装类。使基本类型可以进行了对象的操作。（设置属性，访问属性，这个访问属性的意思是其包装类中的属性，如length）

注：Null,Undefined这两种原始类型是没有包装类型。（记得首字母大写）

例：
var str = "string";
str.length; //6
str.t = 3;  //3
str.t;      //undefined

解释：虽然在进行对象的操作时，会自动生成相关的包装类型，使其能够进行。但是在完成这个操作之后，临时包装类型马上就会被销毁，所以虽然可以设置属性，但是属性的值，只有在设置的这条语句可以被访问到。下一个语句被执行时，由于包装类已经被销毁，所以返回的值为undefined.

包装类型的使用有更为简单的方式：
(123).toString()  //"123",返回字符串
123.toString()    //SyntaxError

"123".length      //3，从中可以看到字符串的包装类使用不需要用小括号包裹

false.toString()  //"false",同样不需要小括号包裹




注：五种基本类型之外，还有一种复杂数据类型——Object，本质上是有一组无序的名值对组成。


运算符

关于特殊运算符的一些例子：

条件运算符：
true?1:3		//1

单目加运算符(其实质是Number()方法)：
+[23] 			//23
+"123" 			//123
+[12,34] 		//NaN
+{} 				//NaN
+[]					//0
+"" 				//0

delete运算符：
var obj = {x:1,y:2};
obj.x  				//1
delete obj.x 	//true
obj.x 				//undefined
delete obj.z  //true
obj.z  				//undefined

总结：delete运算符只关注其运算是否成功实现了，如果是则返回true。而被delete的属性,其值变为undefined。无论其原来的值是否为undefined.

深入：
Object.defineProperty(obj,'x',{configurable:false, value:1});
Object.defineProperties(obj,{
'y':{
	value:undefined,
	configurable:false
},
'z':{
	value:3
}
});

delete obj.x  	//false
delete obj.y 		//false
delete obj.z 		//false 

总结：从第一个属性的设定，熟悉单个定义的方式。
而第二个属性，则可以看到，其值被我设定成了undefined，按照我上面的说法，delete这个属性应该返回true。但实际上返回false。（本人的想法：貌似相互矛盾，但是其实不然）解释：通过defineProperty或者defineProperties定义的对象属性，如果其configurable设置为false，那么他将不能被删除。所以delete删除运算符没有起到作用，所以返回false。返回true的原因就知道了:起到了作用。
那么第三个属性的定义则是说明没有必要显式的设定configurable的值就可以让delete运算符无效。这是因为用这样的方法定义的属性，其configurable的默认值为false.扩展一下，其writable（是否只读）和enumerable（是否可被枚举）属性也都是false默认值。


再扩展一下：一个通过defineProperty或者defineProperties定义的属性，其value默认值为undefined。所以第二个的value也没有必要显式定义。还有get(返回属性值)和set(设定属性值)，这两个的默认值都是undefined.(其作用稍后再说)

in运算符：
window.x = 1;
x in window   //true

instanceof, typeof运算符：
这个在之前有详细讲解。。。

new运算符：
function Foo(){}
Foo.prototype.x = 1;
var obj = new Foo();
obj.x;  // 1
obj.hasOwnProperty('x'); // false
obj.__proto__.hasOwnProperty('x'); // true

注意：这里最后的__proto__属性是两个下划线。虽然这个实例到构造器原型对象的指针被称之为[[Prototype]]，但是不能够通过这个名称访问，safari，firefox,chrome支持用__proto__这个属性访问。当然，这个和obj.prototype有明显的区别。不要弄混了。

this运算符：
比较麻烦，以后讲

void运算符：
void 0  //undefined
void (0) //undefined
//无论后面跟怎样的表达式，都会返回undefind


今天涉及到实际的编程中，发现一个重要的东西。

在定义一个变量的时候，在声明阶段就要给它赋予初始值，不同于强类型的编程语言，如果不赋予初值，那么变量的值被默认为undefined。这个值在简单的加减时，都会返回NaN.

这个问题一直没有被发现，是因为留下了原来的编程语言习惯在里面。所以定义变量要賦初值，给出类型。

例：
var a = 0;
var a = "";
var a = [];
var a = {};
var a = false;
var a = null;

实践当中又发现一个很傻的问题：
NaN不与任何数相等，包括他自己。如果要判断一个表达式的值为NaN，用isNaN()这个方法。

例：如果我想判断一个数字不是NaN。
错误：＋string !== NaN   这个表达式肯定是正确的，因为NaN不语任何数相等，无法起到作用。

正确：!isNaN(+string)


提示：string包装类的charAt方法后面是小括号，不是中括号，参数为一个索引。而indexOf同样是小括号，参数为一个子字符串。

