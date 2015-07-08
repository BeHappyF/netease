var addEvent = document.addEventListener ?
	function (elem, type, listener, useCapture) {
		elem.addEventListener(type, listener, useCapture);
	} :
	function (elem, type, listener, useCapture) {
		elem.attachEvent('on' + type, listener);
	};


var delEvent = document.removeEventListener ?
	function (elem, type, listener, useCapture) {
		elem.removeEventListener(type, listener, useCapture);
	} :
	function (elem, type, listener, useCapture) {
		elem.detachEvent('on' + type, listener);
	};