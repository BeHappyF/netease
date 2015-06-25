//清除文本节点中的空白节点
function cleanWhitespace (element){
	// 如果不提供参数，则处理整个HTML文档
	var element = element || document;
	// 使用第一个子节点作为开始节点
	var cur = element.firstChild;
	// 一直到没有子节点
	while(!cur) {
		// 如果是文本节点，且只包含空格
		if(cur.nodeType === 3 && /\s/.test(cur.nodeValue))  {
			element.removeChild(cur);
		}else if(cur.nodeType === 1){
			// 递归整个文档
			cleanWhitespace(cur);
		}
		// 遍历子节点
		cur = cur.nextSibling;
	}
}
