function getElementByClassName (element, names) {
	if(element.getElementByClassName) {
		return element.getElementsByClassName(names);
	} else {
		var elements = element.getElementsByTagName("*");
		var flag,
				classNameStr;
				element;
		var result = [];
		names = names.split(" ");
		for (var i=0; element = elements[i];i++) {
			flag = true;
			classNameStr = " " + element.className + " ";
			for(var j=0, name; name = names[j]; j++) {
				// 字符串链接的最后为什么加一个空字符的判断。不明白。
				if(classNameStr.indexOf(" " + name + "") == -1) {
					flag = false;
					break;
				}
			}
			if(flag) {
				result.push(element);
			}
		}
		return result;
	}
}

// 自己尝试打一遍代码。发现自己存在的一些问题：对于数组对象的每一项。 
// 不愿意添加一个变量去表示。总是采用方括号后缀的方式去访问属性。

// 一个小技巧：for循环中的中间位置是一个结束判断的语句。常见的是根据
// 长度来判定结束标志。示例代码中有一个很巧妙的思想。就是让判断语句变
// 为一个赋值的语句。如果赋值右边的值不为空，则循环继续。为空则结束。
// 让语句即起到了赋值的作用，然后又能够起到结束判断标志的作用。