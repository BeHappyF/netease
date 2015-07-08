var elem = document.getElementById("div1");
var clientX, clientY, moving;
var mouseDonwHandler = function (event) {
	event = event || window.event;
	clientX = event.clientX;	//获得当前div距离浏览器左边的距离
	clientY = event.clientY;	//获得当前div距离浏览器上边的距离
	moving  = !0;	//true,判断是否可以拖动。如果鼠标没有按下，则无法拖拽div。
}

// mousemove事件触发需要的长度是由浏览器默认决定的。
// mousemove可被触发多次，所以在拖拽的过程中。如果慢一点，距离短一点的话。能够看到跳屏。
// 这个原因很简单：mousemove触发的距离有浏览器决定，只有达到指定的宽度才能够触发。进行位置的更新。
var mouseMoveHandler = function (event) {
	if(!moving) return;	//如果鼠标没有按下，则无法拖拽
	event	= event || window.event;	
	var newClientX = event.clientX;	//获取移动之后的新坐标点
	var newClientY = event.clientY;
	// 因为要在页面上拖拽div，那么这个div肯定是绝对定位。所以会有left和top属性。
	//如果没有的话那就是没有设置，所以默认相对于页面右上角位置。
	var left = parseInt(elem.style.left) || 0;
	var top  = parseInt(elem.style.top)  || 0;
	//设置div元素的left和top属性，实现拖拽功能
	elem.style.left = left + (newClientX - clientX) + "px";
	elem.style.top  = top  + (newClientY - clientY) + "px";
	//因为移动是可多次的，所以需要将新的位置设置为当前位置。作为下一次位置移动的参考。
	clientX = newClientX;
	clientY = newClientY;
}
// 通过给mouseup事件设置moving为false.使无法在进行拖拽功能。
var mouseUpHandler = function (event) {
	moving = !1;
}

// 这个就是那个兼容的添加事件的函数，不过这里省略了最后一个是否加入捕获阶段的变量。
// 不过这个变量没有太大的作用。不传入对于函数运行也没有影响。
// 因为这个变量只会在W3C标准下的add/removeEventListener()方法中使用。
// 而这个参数是可选的。所以在函数调用时，没有了这个参数。程序也能正常运行。
addEvent(elem, 'mousedown', mouseDonwHandler);
addEvent(elem, 'mousemove', mouseMoveHandler);
addEvent(elem, 'mouseup',   mouseUpHandler);