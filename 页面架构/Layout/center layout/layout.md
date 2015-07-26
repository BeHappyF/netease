居中布局

1.水平布局（父容器和子容器的宽度都不一定）
	①inline-block + text-align
		-ad:兼容性好，IE6、7虽然不支持inline-block,但是可以通过display:inline;和zoom:1;的设置达到相同的效果。

		-dis:text-align设置在父容器内，子容器继承这个属性，但是子容器内的内容同样继承这个属性，在大多数情况下，需要在子元素的样式表中设置text-align还原样式，增加了代码量。

	②table + margin
		-ad:只设置本身的样式即可；
			兼容性好，ie8+都支持display:table，如果想要实现IE6.7的兼容，只需要将div标签改为table标签即可。	

	③absolute + transform
		-ad:子元素脱离文档流，不会对其他的子元素产生影响。
		-dis:兼容性差，transform是css3的新增属性，所以对ie6.7.8无解，并且在高版本浏览器还需要加一些私有前缀。

	④flex + justify-content
		-ad:只需要设置父容器的样式；

		-dis:兼容性差，IE6.7.8不支持flex属性。


2.垂直布局（父容器和子容器的宽度都不一定）

	①table-cell + vertical-align
		-ad:兼容性好，IE8+,可以通过将HTML的结构中的子容器变成table形式可以兼容IE6.7.

	②absolute + transform
		-ad:不干扰其他子元素；
		-dis：兼容性差，transform是css3的新增属性，所以对ie6.7.8无解，并且在高版本浏览器还需要加一些私有前缀。

	③flex + align-item
		-ad:只需要在父容器设置样式；
		-dis：兼容性问题；

3.水平垂直居中（父容器和子容器宽高都不定）

	①inline-block + text-align + table-cell + vertical-align
		-ad:兼容性高

	②position + transform
		-ad:只需设置子元素样式；	
			脱离文档流；
		-dis:兼容性差。

	③flex + justify-content + align-items
		-ad:只需要设置父容器样式；
		-dis:兼容性差。


