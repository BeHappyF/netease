一.CSS -> DOM

例子：
<head>
	<link rel="stylesheet" href="base.css">
	<style>
		body {margin: 30px;}
		p {color: #aaa;line-height: 20px;}
	</style>
</head>
<body>
	<p style="color:red">paragraph</p>
</body>

1.外部样式表 -> element.sheet
	base.css -> link.sheet 	// [object CSSStyleSheet]

2.内部样式表 -> element.sheet
	body{...} p{...} -> style.sheet


注：
①前两种方式获取的样式表还可以通过一个统一的方式获取:
document.styleSheets
②具体的操作案例详见：../test/style/test.html

3.内嵌样式	-> element.style
	style="..." -> p.style


二.获取元素样式的方法

1.element.style
	只能够获得元素的内嵌样式，所以不一定能够获得实际的样式。

	修改单个样式。可以通过直接访问属性名（但是由于关键字等原因，不是和CSS样式一一对应）。例：element.href = "#";  element.htmlFor = "id";

	修改单个元素样式。可以使用cssText属性访问修改样式，样式为内嵌式,cssText本身是一个字符串而不是对象。例：element.cssText = "background-color:red; color:blue;".

	修改单个元素样式。可以通过修改元素的class属性，给元素增添/删除多个样式，样式为内部样式表。例：element.className += "show";

	修改多个元素属性。可以通过创建/修改link元素。增加/删除/修改外部样式表。例：link.href = "./skin.summer.css".

2.window.getComputedStyle(element)
	语法：var style = window.getComputedStyle(element);
			 var color = style.color; 	// "rbg(255,0,0)"
	返回值：是一个CSSStyleDeleration对象，与element.style属性是相同的。但是是只读的。无法修改。
	ie9以下使用element.currentStyle.
