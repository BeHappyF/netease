if(!Object.create) {
	(function () {
		var F = function () {};
		Object.create = function (obj) {
			if(arguments.length<=1&&obj !== null && typeof obj === "object") {
				F.prototype = obj;
				return new F();
			}else {
				throw Error("参数不正确");
			}
		}
	})();
}