一.event对象
	概述：用来表示当前事件。event 对象的属性和方法包含了当前事件的状态。

	使用区别：在 W3C 规范中，event对象是随事件处理函数的参数传入的，Chrome、FireFox、Opera、Safari、IE9.0及其以上版本都支持这种方式；但是对于 IE8.0 及其以下版本，event 对象必须作为 window 对象的一个属性。

	demo参看：./event.js
	
	参考链接：http://www.itxueyuan.org/view/6340.html


二.dataset对象
	属性类型：HTMLElement.dataset
	使用方法：data-*属性集
	作用：元素上保存数据
	参看链接：http://www.zhangxinxu.com/wordpress/2011/06/html5自定义属性对象dataset简介/


三.property accessor(属性访问符)
	概述：每个HTML属性对应相应的DOM对象属性
	例子：
	<label for="userName"></label>
	<input id="userName" class="u-txt" type="text" maxlength="10" disabled onclick="show()">

	HTML attribute:
		id				userName													
		class			u-txt															
		type 			text 															
		for				userName												  
		maxlength	10																
		disabled 																
		onclick		show()		

	DOM property:
		id				userName													String
		class			u-txt															String
		type 			text 															String
		htmlFor		userName												  String
		maxlength	10																Number
		disabled 	true															Boolean
		onclick		function	onclick(event){...} 		Function
	注：这里的class名称用className这样一个属性名来表示，是因为javascript中class是一个关键字。htmlFor的使用因为同样的原因。	

注：
①属性访问符可以实现”读写“的操作。赋值不但可以修改已有的属性值，还可以创建新的属性。访问属性的方式有两种，一个使用"."操作符，另外则是使用中括号括起属性的字符串。其访问到的属性是转换过的实用对象。

②特点：
通用性差———名字异常（说由于关键字等原因，HTML属性和DOM属性不完全一致)
扩展性差；
转化的是实用对象（即javascript对象类型，优势）。


四.get/setAttribute

1.getAttribute(property)


2.setAttribute(name, value)
	例：input.setAttribute("disabled", "");  //因为是boolean值，不需要指定值则为true.

	访问到的属性都是属性字符串。

总结：
①仅字符串（缺点）
②通用性（字符串和HTML的属性相对应，优势）

附：
原型链
HTMLElement --> Element --> Node --> EventTarget --> null
HTMLCollection --> null
NodeList --> null
DOMStringMap --> null(DOMStringMap为dataset的数据类型)
DOMStringList --> null(暂时不知道)
NamedNodeMap --> null(NamedNodeMap为element.attributes返回的值)