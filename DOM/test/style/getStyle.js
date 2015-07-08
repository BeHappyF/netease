// 用于获取元素的实际样式
function getStyle (element, cssPropertyName) {
	return window.getComputedStyle?window.getComputedStyle(element)[cssPropertyName]:element.currentStyle(cssPropertyName);
}

