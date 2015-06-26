

function foo() {}
foo.prototype.z = 3
foo.prototype;   //foo{z:3}
foo.__proto__    //function Empty()
foo.constructor  //Function()



var obj = {f:3}
obj.constructor 	//function Object()
obj.__proto__ 		//Object()