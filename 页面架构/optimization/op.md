1.why?
	-提升网页响应速度
	-对搜索引擎、屏幕阅读器友好
	-提高可读性，可维护性

how?
	-减少请求
		图片合并：图片精灵；
		CSS文件合并：多个CSS文件合并为一个；少量CSS样式内联；避免使用import的方式映入	CSS文件（每一个import都是一个请求，并且是同步的）；
	-减少文件大小
		选择合适的图片格式：PNG,JPG.
		压缩图片：ImageOptim,ImageAlpha,JPEGmini.
		css值缩写：margin,padding,border,border-radius,font,background.
		省略值为0的单位：0px -> 0; 0% -> 0; 0.5 -> .5
		颜色值最短表示：rgb(204,204,204) -> #ccc
		CSS选择器合并：
		文件压缩：YUI Compressor, cssmin, ...
	-页面性能
		加载顺序：CSS文件放在head的底部，javascript文件放在body的底部。
		减少标签数量：
		选择器长度
		避免耗性能属性：expression,filter,border-radius,box-shadow,gradients.
		图片设置宽高：图片的位置在未下载完成之前就会实现HTML布局定位，如果在下载完之前	没有设置图片的宽高或者宽高设置与实际不符的话，浏览器就需要一个回流，重绘的过	  程，将图片重新渲染一遍，会损耗很多的事件。
		所有表现用CSS实现：少用javascript。
	-可读性，可维护性
		规范：
		语义化
		尽量避免hack
		模块化
		注释 