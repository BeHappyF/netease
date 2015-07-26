多列布局

1.定宽+自适应
	
	①float + margin
		-ad:非常容易理解；
		-dis:在IE6浏览器发生3像素bug：在左右之间出现3px的空隙。解决的方式：1.让右侧也浮动；2.在左边的定宽元素加一个margin-right:-(width-value).
		数据设置紧密耦合。

	②float + margin + (fix)
		-ad:兼容性好，在任意浏览器下都有相同的效果；
		-dis:代码量较多。

	注：元素的完全宽度等于margin,padding,border,width相加而成，如果负margin等于余下三者的和，那元素的实际宽度也就变为了0px.

	③float + overflow
		-ad:代码简单；
		-dis:兼容性差，在ie6下无法兼容（其实也不差）。
	注:overflow:hidden;会触发BFC模式。此模式下的容器与外界隔离，所以说不会被浮动元素所影响（浮动元素会被其他的元素环绕）。

	④table
		-ad:
		-dis:代码较多，兼容性差。

	⑤flex 	
		-ad:代码少，简单；
		-dis:兼容性差；flex是根据内容做布局，所以性能在内容较多的时候会比较差，也就是说布局里面的内容不能够太过复杂；


2.定宽+定宽+自适应
	①float + overflow
	②
	③
	④








	①
	②
	③
	④