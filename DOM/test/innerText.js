//其实就是使用textContent代替innerText的功能
function innerText () {	
	if(!("innerText" in document.body)) {
		HTMLElement.prototype.__defineGetter__("innerText", function(){
			return this.textContent;
		});
		HTMLElement.prototype.__defineSetter__("innerText", function(s){
			return this.textContent = s;
		});
	}
}