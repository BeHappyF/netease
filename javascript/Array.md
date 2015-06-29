数组的返回值很有意思：

在chrome的console控制台对一个数组进行输出，有三种不同的形式：

var a = [23,,,234,23,2]

alert(a) 			//23,,,234,23,2。
//这是一个字符串，后台调用了数组的toString()方法，toLocalString()返回同样的结果。

a 						//[23, undefined * 2, 234, 23, 2]。因为返回的是数组，所以是这种形式，不过同样对原数组做了一定的修改，将undefined的数组项显式的表示出来，并且用数字的方式简化了多个连续未声明数组项的表示。这个返回的结果同console.log()和valueOf()方法相同。

注：如果数组中的某一项的值为null或undefined。那么该值在join(),toLocalString(),toString()和valueOf()方法返回的结果中以空字符串表示。

所以使用a.join("");方法的返回值为："23234232"，完全忽略了空项。这一点很好理解。

数组中delete使用

因为数组同样是对象，可以通过delete删除对象中的项，其质会变为undefined.但是数组的长度不会改变，只是变成了稀疏数组。


Array.prototype.reduce&&reduceRight

var arr = [1,2,3]

arr.reduce(function(x,y) {return x+y;},10)	//16
arr.reduce(function(x,y) {return x+y;})			//6

arr.reduce(fucntion(x,y) {return x>y?x:y;})
//1|2 -> 2
//2|3 -> 3
arr.reduceRight(function(x,y) {return x>y?x:y;},8)
//8|3 -> 8
//8|2 -> 8
//8|1 -> 8

reduce()方法和reduceRight()几乎都一样，只是遍历整个数组的方向相反。而在方法的参数上，如果只有一个函数的话，那么第一次的进行计算的两个参数就是最左边或最右边的两个数组元素，但是如果方法中有第二个参数。那么只是最左边或最右边的第一个元素和参数进行计算了，然后都要遍历整个数组。

注：不会改变原数组

Array.prototype.filter

var arr = [1,2,3,4,5,6,7,8,9,10];
arr.filter(function(x,index) {
	return index % 3 === 0 && x >= 8;
});  //returns 1,4,7,,8,9,10
arr; //[1,2,3,4,5,6,7,8,9,10]

注：不会改变原数组






Array.prototype.map

var arr = [1,2,3];
arr.map(function(x) {
	return 10 + x;
});	//[11,12,13]
arr;  //[1,2,3]

注：不会改变原数组

Array.prototype.forEach

var arr = [5,4,3,2,1];
arr.forEach(function(x,index,a) {
	console.log(x + "|" + index + "|" + (a === arr));
});
//5|0|true
//4|1|true
//3|2|true
//2|3|true
//1|4|true
arr; 	//[5,4,3,2,1]

注：不改变原数组

Array.prototype.indexOf&&lastIndexOf

var arr = [1,2,3,2,1];
arr.indexOf(2);					//1
arr.indexOf(33);				//-1
arr.indexOf(2,2);				//3
arr.indexOf(1,-3);			//4
arr.lastIndexOf(2);			//3
arr.lastIndexOf(2,-3);	//1
arr.lastIndexOf(1,-1);	//4

注：不改变原数组






Array.isArray 			
判断是否是数组

Array.isArray([]);	//true

别的方式判断：
[] instanceof Array; //true
({}).toString.apply([]) === '[object Array]' //true
[].constructor === Array;  //true


Array.prototype.concat()
连接数组

有个坑：
var arr = [1,2,3,4]
arr.concat(3,2,23,5)    	//[1,2,3,4,3,2,23,5]
arr.concat(3,4,5,[6,2]);	//[1,2,3,4,3,4,5,6,2]
arr.concat([3,4,[2,3]]) 	//[1,2,3,4,3,4,[2,3]]

注：原数组未改变






Array.prototype.join

var arr = [1,2,3]
arr.join(); 	//'1,2,3'
arr.join('-') //'1-2-3'

//通过join方法实现字符的重复
function repeatString(str, n) {
	return new Array(n + 1).join("str");
}
repeatString('a', 3);   //"aaa"
repeatString('Hi', 5);  //"HiHiHiHiHi"

arr; 	//[1,2,3]

注：不改变数组本身 






Array.prototype.reverse

var arr = [1,2,3]
arr.reverse(); //[3,2,1]
arr;					 //[3,2,1]

注：原数组被改变






Array.prototype.sort

var arr = ['a', 'd', 'c', 'b'];
arr.sort();		//['a', 'b', 'c', 'd']

arr = [13, 24, 51, 3]
arr.sort(); //[13, 24, 3, 51]
arr;				//[13, 24, 3, 51]
 
arr.sort(function(a,b) {
	return a - b;
}); 		//[3, 13, 24 ,51]
//简单的记忆方式：即参数排序和减法两端的排序相同，返回的饿结果就是升序。反之降序。

arr = [{age:24}, {age:32}, {age:12}];
arr.sort(function(a,b) {
	return a.age - b.age;
});
arr.forEach(function(item) {
	console.log('age', item.age);
});
//result:
//age 13
//age 24
//age 32

注：原数组被改变






Array.prototype.slice
返回部分数组
var arr = [1,2,3,4,5];
arr.slice(1,3); 			//[2,3]
arr.slice(1);					//[2,3,4,5]
arr.slice(1,-1); 			//[2,3,4]
arr.slice(-4,-3); 		//[2],第二参数一定比第一个大

注：不改变数组本身 

Array.prototype.splice
数组拼接

var arr = [1,2,3,4,5];
arr.splice(2);				//[3,4,5]
arr;									//[1,2]

var arr = [1,2,3,4,5];
arr.splice(2,2);			//[3,4]
arr;									//[1,2,5]

var arr = [1,2,3,4,5];
arr.splice(1,1,'a','b');	//[2]
arr;											//[1,'a','b',3,4,5]

注：原数组被改变


