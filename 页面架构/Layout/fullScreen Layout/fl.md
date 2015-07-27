全屏布局

1.position
	兼容：ie6不兼容，其他都可以。
		注：hack方案：http://nec.netease.com/library/141027
	百分比的显示：这样需要将所有的固定大小的位置的属性都变为响应的百分比。
	注：如果要实现其他的框架自适应显示，由内容充满位置。position无法实现。
2.flex
	兼容：IE9及以下
	注：可以实现其他框架自适应内容。

3.Grid
	也可以实现各框架自适应。



Conclusion

方案			兼容性		性能		自适应
Position	好			好		部分自适应
Flex 		较差			差		可自适应
Grid		差			较好		可自适应