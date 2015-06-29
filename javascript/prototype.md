一个完整的实例：

//父函数
function Person(name, age) {
	this.name = name;
	this.age = age;
}

//在父函数的原型属性添加方法
Person.prototype.hi =function () {
	console.log("Hi, my name is " + this.name + "I'm" + this.age + "years old now.");
};

Person.prototype.walk = function() {
	console.log(this.name + "is walking....");
};

//在父函数的原型属性添加属性
Person.prototype.LEGS_NUM = 2;
Person.prototype.ARMS_NUM = 2;

//子函数
function Student(name, age, className) {
	//调用父函数的初始化方法
	Person.call(this, name, age);
	//定义自身的初始属性
	this.className = className;
}

//设置子函数的原型属性继承于父函数的原型属性
//这比较关键，如果是直接指定两者的原型相同，那么就没办法实现子函数原型中的特有属性，所以以这样的方式。
//以函数原型属性的继承关系来构建父与子之间的联系。这是唯一的通径。也就是所谓的原型链继承。而构造器的作用其实就是起到初始化一些属性的作用。
//这里有一个坑：必须先建立两者的原型链关系，之后再设置子函数原型的具体实现。反之，则会将子函数中的具体实现抹除。
//原因：Object.create会创建一个以其参数为原型的空对象。所以之前的具体实现都被这个空对象覆盖了。
//还有一个问题，create方法是在ecma5才实现的一个方法。所以考虑到兼容性的问题。可以自己实现create方法。例子在最后。
Student.prototype = Object.create(Person.prototype);

//constructor是可以随意修改的，一般情况下，构造器A创建的对象的constructor属性就是A(通过A.prototype继承而来）
这里重新设值只是为了迎合这个“习惯”，其实没有太大的意义。
//摘自@Bosn,觉得讲的很具体。
Student.prototype.constructor = Student;

//定义子类的hi方法，覆盖父方法中的hi
Student.prototype.hi = function() {
	console.log("Hi, my name is" + this.name + "I'm" + this.age + "years old now, and from" + this.className + ".");
};

//定义自身特有的方法
Student.prototype.learn = function(subject) {
	console.log(this.name + "is learning" + subject + "at" + this.className + ".");
};

//test
var humiliter = new Student("Humiliter", 22, "Class 3, Grade 3");
humiliter.hi();		//Hi,my name is Humiliter,I'm 22 years old now, and from Class3, Grade3.
humiliter.LEGS_NUM;
humiliter.walk(); //Humiliter is walkin....
humiliter.learning("math"); //Humiliter is learning math at Class3, Grade3.






实现继承的方式

function Person() {
	
}

function Student() {
	
}
//这种方式最不推荐，以为将两个函数的原型合并，对任一一个的修改都会影响到另外一个。
Student.prototype = Person.prototype;
//能够实现继承关系，但是如果在父类的构造器中实现一些属性的初始化的话，那么我们就需要在new的括号内加入一些参数。而我们其实只是想要得到一个继承父类原型的空的子类原型。不想要获得一些参数的定义。所以这种方式也不是很好。
Student.prototype = new Person();
//这是一种最为推荐的方法，Object.create生成一个以参数为原型的空的对象，这正是我们需要的子类的原型的样式。但是这是第五版才有的方法，在老的浏览器中没有很好的兼容，但可以通过简单的自己实现。从自己实现的代码中可以看出，其实还是第二种方法作为基础。
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;




Object.create()

if(!Object.create) {
	Object.create = function(proto) {
		function F() {}
		F.prototype = proto;
		//这里最后的F后面没有跟一个（）,这是因为没有参数的情况下可以省略
		return new F;
	};
}


