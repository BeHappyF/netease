function $(id) {
	return typeof id === "string" ? document.getElementById(id) : id;
}
var Util = (function(document, util) {
	util = util || {};

	util.addEventListener = function(element, type, listener) {
		if (element.addEventListener) {
			// 符合W3C规范
			element.addEventListener(type, listener, false);
		} else {
			// 兼容IE浏览器
			element.attachEvent('on' + type, listener);
		}
	}
	return util;
})(document, Util);