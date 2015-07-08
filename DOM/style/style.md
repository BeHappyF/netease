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
	base.css -> link.sheet

2.内部样式表 -> element.sheet
	body{...} p{...} -> style.sheet
	element.sheet.cssRules


注：
①前两种方式获取的样式表还可以通过一个统一的方式获取:
document.styleSheets
②具体的操作案例详见：../test/style/test.html

3.内嵌样式	-> element.style
	style="..." -> p.style