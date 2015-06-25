数组的返回值很有意思：

在chrome的console控制台对一个数组进行输出，有三种不同的形式：

var a = [23,,,234,23,2]

alert(a) 			//23,,,234,23,2。这是一个字符串，后台调用了数组的toString()方法，toLocalString()返回同样的结果。

a 						//[23, undefined * 2, 234, 23, 2]。因为返回的是数组，所以是这种形式，不过同样对原数组做了一定的修改，将undefined的数组项显式的表示出来，并且用数字的方式简化了多个连续未声明数组项的表示。这个返回的结果同console.log()和valueOf()方法相同。

注：如果数组中的某一项的值为null或undefined。那么该值在join(),toLocalString(),toString()和valueOf()方法返回的结果中以空字符串表示。

所以使用a.join("");方法的返回值为："23234232"，完全忽略了空项。这一点很好理解。