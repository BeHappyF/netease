function getElementDataset (element) {
	if(element.dataset) {
		return element.dataset;
	} else {
		var attrs = element.attributes;
		// tmp为去处data-之后,并以"-"分割之后的数组
		var tmps,
		// name为修改连接之后的属性名
				name;
		// 因为每个属性都有属性值，刚好符合对象的键值对的形式。
		var result = {};
		for(var i=0, attr; attr = attrs[i]; i++) {
			if(attr.name.substring(0,5) === "data-") {
				tmps = attr.name.slice(5).split("-");
				for(var j=0, tmp; tmp = tmps[j];j++) {
					name += tmp.slice(0,1).toUpperCase() + tmp.slice(1);
				}
				result[name] = attr.value;
			}
		}
		return result;
	}
}