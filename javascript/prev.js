// 返回前一个元素节点
function prev(elem) {
	do {
		elem = elem.previousSibling;
	}while(elem && elem.nodeType !== 1);
	return elem;
}


//返回后一个元素节点
function next(elem) {
	do{
		elem = elem.nextSibling;
	}while(elem && elem.nodeType !== 1);
	return elem;
}

// 感觉这样是有问题的，没有考虑到没有前后的元素兄弟节点。

// 返回元素节点的第一个子元素节点
function first(elem) {
	elem = elem.firstChild;
	return elem && elem.nodeType !== 1 ? nextSibling(elem):elem;
}

// 返回元素节点的最后一个子元素节点
function last(elem) {
	elem = elem.firstChild;
	return elem && elem.nodeType !== 1 ? previousSibling(elem) :elem;
}

// 还是感觉不对劲

