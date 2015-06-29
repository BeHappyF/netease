function myType(param) {
	return "I am an " + Object.prototype.toString.apply(param).slice(8,-1) + "!";
}