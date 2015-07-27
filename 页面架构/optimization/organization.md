规范

1.文件规范
	-文件分类
		通用类
		业务类
	-文件引入
		行内样式：不推荐，但是不代表禁止。如：display:none;在一些情况下的使用。
	-文件本身
		文件名：如：由小写字母、数字、中划线组成
		编码：utf-8

2.注释规范
	块状注释：统一缩进；在被注释对象之上。
	单行注释：文字两端需空格（避免中文字编码失效的情况下，使样式失效的情况发生）；在被注	释对象之上。
	行内注释：文字两端需空格；在分号之后。

3.命名规范
	分类命名：模块样式，具体样式。
	命名格式：大小写选择器（建议小写）；长度（权衡长度和可读性）。
	语义化命名：以内容语义命名。

4.书写规范
	单行与多行（各有利弊）
	空格与分号：缩进（2个或4个空格）；CSS规则内空格（冒号后是否要空格，分号后是否要空格	）；分号：保留最后一个属性值的分号。
	属性顺序：根据属性的重要性按顺序书写。
	hack方式：
		统一各浏览器的Hack方式	
			IE6   	-property:value
			IE6/7   *property:value
			例：m-list{color:#000;*color:#888;_color:#fff;}
		不要滥用Hack
	统一属性值：color,url（引号的使用）

注：属性重要表

显示属性			自身属性			文本属性和其他修饰
display			width			font	
visibility		height			text-align
position		margin			text-decoration
float			padding			vertical-align
clear			border			white-space
list-style		overflow		color
top				min-width		background

5.其他规范（主要是html规范）
	文档声明
		如："<!DOCTYPE html>"，且首行顶格开始
	闭合
		闭合标签要闭合；自闭和标签选择是否自闭和。
	属性
		属性值是用双引号还是单引号；
		属性：disabled="disabled";disabled.
	层级
		用缩进体现层级，提高可读性；
		标签正确嵌套，但嵌套不宜太深。
	注释
		布局方式的注释
	大小写
		标签，属性均小写

	图片规范
		文件名称：语义，长度。
		保留源文件
		图片合并
			-尽可能使用sprite技术
			-sprite图片可按模块、业务、页面来划分