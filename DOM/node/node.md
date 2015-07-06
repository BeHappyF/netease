一.节点的获取方式（一）

1.document.getElementById(id)
	获取单个指定的元素节点。

2.element.getElementsByTagName(tagName)
	获取一个或多个元素节点，返回值为HTMLCollection类型。通过标签名的方式。
	参数为“*”是可以获得元素下的所有后代元素。这个通配符和CSS选择器有相同的作用。

3.element.getElementsByClassName(className)
	获取一个或多个元素节点，返回值为HTMLCollection类型。通过类名的方式。
	有兼容问题（IE6/7/8)，解决的代码见../test/getElementsByClassName.js
	存在查询多个className的情况，两者用空格隔开。并且顺序不影响。

4.element.getElementsByName(name)
	获取一个或多个元素节点，返回值为HTMLCollection类型。通过name属性值的方式。
	通常在操作单选框和复选框





二.节点的获取方式（二）

1.element.querySelector 
	获取element下单个指定元素节点或多个元素中的第一个节点。参数书写方式与CSS选择器相同。

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


总结：也是获取节点的方式，但是由于紧密联系，可维护性差。

四.创建节点

1.document.createElement(tagName)
	接受参数为新创建的空标签节点





五.插入/替换节点

1.node.parentNode.appendChild(node)
	接受一个参数，新插入的节点。位置默认为父元素的最后位置。
	同层次增加的先后顺序有关。

2.node.parentNode.insertBefore(node, targetNode)
	接受两个参数，第一个为目标节点，第二个为参照节点。

3.node.parentNode.replaceChild(node, oldnode)
	接受两个参数，第一个为新替换节点，第二个为旧的被替换节点。
  



六.修改节点

1.textContent
	设置或获取节点及其后代节点的文本内容(即去处所有的标签表示)
	ie9以下不支持

2.innerText
	设置或获取节点及其后代节点的文本内容
	不规范，ff不支持,兼容见:../test/innerText.js
	



七.删除节点

1.node.parentNode.removeChild(child)
	接受参数为被删除的节点


八.innerHTML

1.innerHTML
	设置或返回表格行的开始和结束标签之间的HTML。(可以添加/删除后代节点)
	如果是在原有的节点基础上修改（添加）节点内容。那么相当于重新绘制一遍此节点。所以在javascript中前面对此节点内容设置的样式和事件都将失效。
	有安全问题，内存泄露。
	建议仅用于新节点：内容为空，没有标签。











