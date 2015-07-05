一.节点的获取方式（一）

1.document.getElementById
	获取单个指定的元素节点。

2.element.getElementsByTagName
	获取一个或多个元素节点，返回值为HTMLCollection类型。通过标签名的方式。

3.element.getElementsByClassName
	获取一个或多个元素节点，返回值为HTMLCollection类型。通过类名的方式。
	有兼容问题，解决的代码见../test/getElementsByClassName.js
	

4.element.getElementsByName
	获取一个或多个元素节点，返回值为NodeList类型。通过name属性值的方式。
	通常在操作单选框和复选框





二.节点的获取方式（二）

1.element.querySelector 
	获取单个指定元素节点或多个元素中的第一个节点。参数书写方式与CSS选择器相同。

2.element.querySelectorAll
	获取一个或多个元素节点，返回值为NodeList类型。参数书写方式与CSS选择器相同。

3.node.childNodes
	获取节点的所有子节点。返回值为NodeList类型。

4.node.children
	获取节点的所有子元素节点。返回值为HTMLCollection类型。
	存在兼容性问题，解决代码见：../test/elementChild.js



总结:
①大多数情况下,NodeList对象和HTMLCollection对象都是个live集合.意思是说,如果文档中的节点树发生变化，则已经存在的NodeList对象也可能会变化.

②NodeList对象和HTMLCollection都具有length属性，其值为包含的节点个数。都具有item(idx)方法：即可以通过访问索引的方式访问到内部的节点。

③HTMLCollection对象特有namedItem(name)方法：即根据name或者id索引值返回对象。 

④由querySelectorAll返回的NodeList对象，其值不是“活”的。

⑤Array和NodeList比较：
原型链：myArray --> Array.prototype --> Object.prototype --> null
myNodeList --> NodeList.prototype --> Object.prototype --> null
NodeList.prototype上只有一个item方法，没有Array.prototype上的众多方法。





三.节点的遍历

1.node.parentNode(父节点)

2.node.firstChild(第一个子节点)

3.node.lastChild(最后一个子节点)

4.node.previousSibling(上一个兄弟节点)

5.node.nextSibling(下一个兄弟节点)

6.node.firstElementChild(第一个元素子节点)

7.node.lastElementChild(最后一个元素子节点)

8.node.nextElementSibling(下一个元素兄弟节点)

9.node.previousElementSibling(上一个元素兄弟节点)



四.创建节点

1.document.createElement(node)
	接受参数为新创建的节点





五.插入/替换节点

1.node.parentNode.appendChild(node)
	接受一个参数，新插入的节点。

2.node.parentNode.insertBefore(node, targetNode)
	接受两个参数，第一个为目标节点，第二个为参照节点。

3.node.parentNode.replaceChild(node, oldnode)
	接受两个参数，第一个为新替换节点，第二个为旧的被替换节点。

4.innerHTML
	设置或返回表格行的开始和结束标签之间的HTML。
	有安全问题。

5.innerText
	设置或获取位于对象起始和结束标签内的文本 



六.删除节点

1.node.parentNode.removeChild(node)
	接受参数为被删除的节点







...有待修改











