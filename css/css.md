一些实践中的心得和经验之谈：（大多来自互联网）

text-size-adjust
	iPone和Android的浏览器纵向和横向模式皆有自动调整字体大小的功能。控制它的就是Css中的-webkit-text-size-adjust：
	将其设置为none或者100%，关闭字体大小自动调整功能。优先使用100%。

	Chrome浏览器默认情况下的字体最小为12px,如果想要设置更小的字体会无法生效。所以需要修改Chrome的默认配置，可以设置如下属性：

	html{-webkit-text-size-adjust: none;}

	但是如果这样设置之后，如果将页面放大，字体将不会随之放大。用户体验不好。
	解决方式

	*{-webkit-text-size-adjust: auto !important;}

placeholder
	兼容性问题：
		:-moz-placeholder{}
		::-moz-placeholder{}
		:-ms-input-placeholder{}
		::-webkit-input-placeholder{}