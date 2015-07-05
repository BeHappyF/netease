// 内置的element.children返回的是HTMLCollection,单个为element节点。
// 通过element.childNodes返回的是NodeList，单个为Node（节点）。
// 当NodeType为1时node为element.
function elementChildren (element) {
	var ret = [];
	if(element.children) {
		// 如果是这样传回去的值，就不是数组类型，而是HTMLCollection类型。
		ret = element.children;
	} else {
		var elements = element.childNodes;
		// 这里通过一个赋值语句来作为结束判断的方式
		for(var i=0,element; element = elements[i]; i++) {
			if(element.NodeType == 1)
				ret.push(element);
		}
	}
	//此时返回的是数组对象
	return ret;

	}



function getElementChildren(element){
   
    var ret;
       
    // 先拿出所有的子节点
    if (element.children){
        ret = element.children;
    }else{
        ret = element.childNodes;
    }
    // 转换类型，把集合转成数组
    ret = [].slice.call(ret,0);
    // 检查子节点的类型
    for(var i=ret.length-1;i>=0;i--){
        // 过滤掉非Element元素
        if (ret[i].nodeType!==1){
            ret.splice(i,1);
        }
    }
       
    return ret;
}

// 这是大多数的做法，有好处：就是返回值一定是个数组。
// 但是其实这样也不好，因为原生方法中返回的其实是HTMLCollection。
// 这样反而修改了原生的返回值。

// 最好的方法是能够返回一个HTMLCollecti的返回值。