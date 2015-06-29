function search(arr, dst) {
	var len = arr.length;
	var ret;
	var left = 0,
	    right = len;
	while(left<=right) {
		var center = Math.floor((left + right) / 2);
		if(dst == arr[center]) {
			ret = center;
			break;
		}else if(dst < arr[center]){
			right = center - 1;
	  }else {
	  	left = center + 1;
	  }
	}
	return ret||-1;
}