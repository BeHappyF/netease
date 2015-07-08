//兼容ie8及以下版本。
function getComputedStyle (element) {
	if(window.getComputedStyle) {
		return window.getComputedStyle(element);
	} else {
		return element.currentStyle;
	}
}

//更简单的方式
// 有一点需要注意：函数名称不能还是getComputedStyle。
// 否则会报 Uncaught RangeError: Maximum call stack size exceeded.
// 原因很简答：现在都是用的现代的浏览器作测试，所以肯定都是有getComputedStyle这个方法。
// 那么在使用的时候就会发生递归。内存被耗费太多而报错。所以只要修改一下函数名称即可。
function computedStyle (element) {
	return window.getComputedStyle? window.getComputedStyle(element):element.currentStyle;
}