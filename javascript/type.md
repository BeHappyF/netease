typeof适合基本数据类型和函数对象的判断。返回一个字符串。

基础：
typeof 100 						=== "number"
typeof "tsdf"					=== "string"
typeof true						=== "boolean"
typeof function () {} === "function"

typeof(undefined)  		=== "undefined"
typeof(new Object()) 	=== "object"
typeof([1， 2]) 				=== "object"
typeof(NaN) 			  	=== "number"
typeof NaN						=== "number"
typeof Infinity				=== "number"



有一些有意思的typeof返回值。

typeof Object    			===	"function"
typeof Object()  			===	"object"
typeof new Object			===	"object"
typeof new Object() 	===	"object"
typeof Function				===	"function"
typeof Function() 		===	"function"
typeof new Funciton		===	"function"
typeof new Function() ===	"function"

总结一下：如果Object和（）或者new关键字组合（一个或者两个），那么返回"Object"。如果单独的Object则返回"Function".反过来如果是Function则无论如何都返回Function。

typeof null						=== "Object"

这是一个历史遗留问题，兼容考虑。坑，要记住！







instanceof 基于原型链的判断。期望左操作数是一个对象，右操作数是一个函数对象或者说函数构造器！

左操作数为基本类型则返回false.
123 	instanceof Object	=== false
true 	instanceof Object	=== false
"123" instanceof Object	=== false

右操作数不是函数对象则报错。

一个例子：

function Person() {}
function Student() {}

Student.prototype = new Person()
<!-- 这个是有必要的，因为Person通过new关键字生成为一个实例，那么这个实例的constructor属性指向他的构造器，在将这实例定义为另外一个构造器的原型对象时。我们需要手动的讲这个原型的构造器属性变为当前的构造器。本例中即：Student-->
Student.prototype.constructor = Student
<!-- 
创建一个实例对象，其内部会有一个指针，指向构造函数的原型对象。ECMA-262第五版叫这个指针为[[Prototype]]。虽没有标准的方法访问[[Prototype]].Firefox, safari ,chrome在每个这样的对象上支持一个属性"_proto_",通过它建立实例和构造函数的原型对象的联系。 
-->
<!-- 
本例当中，创建了humiliter实例之后，则humiliter[[Prototype]]指向Student.prototype原型对象。所以humiliter instanceof Student为true。判断humiliter instanceof Person则是原型链的的向后延展。因为humiliter[[Prototype]]不是Person.prototype。实例会往源头查询。当查询到humiliter[[Prototype]][[Prototype]]刚好为Person.prototype时。返回ture.当然如果不对，还会继续回朔，直到Object.prototype,不过这样一定找不到了。因为Object.prototype为null.是原型链的终点。
 -->
var humiliter = new Student()

humiliter instanceof Student  //true

var one = new Person()

one instanceof Person  //true
one instanceof Student  //false

humiliter instanceof Person  //true

同样有一个有意思的东西。

[null]  		instanceof 	Object	//true
[undefined] instanceof 	Object	//true
null 				instanceof	Object	//false
undefined	 	instanceof 	Object	//false

[Undefined] instanceof  Object  //error
[number]  	instanceof 	Object	//error
[boolean]   instanceof  Object  //error

[Number]  	instanceof 	Object	//true
[Boolean] 	instanceof	Object  //true
[Boolean] 	instanceof 	Array		//true
[true] 			instanceof  Object	//true
[true] 			instanceof 	Array		//ture

总结：所有的东西再加了中括号之后都变成了数组.而定义的数组元素其实都是各类型的包装类对象。
但是中间的三个为什么出错，还不明白。。。

大概知道原因了：中间的三个不属于任何类型。不能够理解成字符串（字符串要用引号括起来），也不是包装类，包装类的书写正确格式是其他正确返回的结果中的。

	

注意：不同window和iframe间的对象类型检测不能用instanceof.




Object.prototype.toString方法

例：Object.prototype.toString.apply([]) === "[object Array]"

Object.prototype.toString.apply(function(){}) === "[object Function]"

Object.prototype.toString.apply(null) === "[object Null]"

Object.prototype.toString.apply(undefined) === "[object Undefined]"


<!-- IE6/7/8下Object.prototype.toString.apply(null)返回"[object Object]" -->

注:这样的方式调用Object.prototype上的属性比较麻烦。所以可以通过一个Object的实力来调用就会方便很多。例：

(new Object).toString.apply(null)	//"[object Null]"
(new Object()).toString.apply(undefined)  //"[object Undefined]"
({}).toString.apply([23,2])  		//"[object Array]"

综上还是对象字面量的方式最为简单。并且他和new Object的方式是等价的。
总结：

typeof适合基本类型及function检测，遇到null失效。

通过Object.prototype.toString方法，适合内置对象和基本类型，遇到null和undefined失效（IE6/7/8等返回［object Object]）.

instanceof适合自定义对象，也可以用来检测原生对象，在不同iframe和window间检测失效。



除此之外还有duck type和constructor这两种方式。但是constructor的值可以改变，需要小心。duck type则是检测类型能力确定类型。较为常用。






