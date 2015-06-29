function add (num) {
	var sum = num;
	var ret = function(num2) {
		if(num2 === undefined) {
			return sum;
		}else {
			sum += num2;
		}
		return ret;
	};
	return ret;
}

function add (num) {
	var args = Array.prototype.apply(arguments);
	var ret = function(num2) {
		args.push(arguments[0]);
		return ret;
	}

	return ret;
} 

//
function add (num) {
	var sum = num;
	var ret = function (num2) {
		sum += num2;
		return ret;
	}
	ret.toString = function () {
		return sum;
	}
	return ret;
}



alert(add(10)(10))


function add(num1) {
	var ret = function (num2) {
		num1 += num2;
		return ret;
	}
	ret.toString = ret.valueOf = function	(){
		return num1;
	}
	return ret;
}








