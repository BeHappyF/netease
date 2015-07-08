DOM事件

问题：什么是DOM事件？
答：点击一个DOM元素；键盘按下一个键；输入框输入内容；页面加载完成。

一.事件流
DOM事件处理执行的过程。
	①capture phase 事件捕获阶段
		从DOM树的最顶端（window）开始往下捕获，直到触发事件节点的父元素。

	②target phase  处于目标阶段
		事件处理节点的事件触发过程

	③bubble phase		事件冒泡阶段
		从触发节点的父节点冒泡到顶层的window对象。

注：
①不是所有的浏览器都支持所有的三个事件阶段。
例如IE低版本浏览器没有事件捕获过程，只有另外两种。

②不是所有的事件都有三个过程。
例如页面的load事件是没有冒泡阶段的。

③事件不一定要注册到目标节点上。只要是注册到整个事件流过程中的某一个元素即可。
例如：在a元素触发的点击事件，可以注册到window对象上，因为a元素的事件流中有window元素。


二.事件注册与触发
完成相应步骤的主体都是DOM元素(element)。
	①事件注册
		方式一：eventTarget.addEventListener(type, listener[,useCapture])
		参数解读：一是事件类型，二是事件监听函数，三是可选择的是否是捕获过程（默认为false，也就是说浏览器默认处理的是冒泡过程。设置为true才会处理捕获过程）.
		
		方式二：eventTarget.("on"+type)

	总结：两者的区别在于方式一可以给一个元素添加多个相同类型的事件。但是方法二只能够添加一个。并且其属性名称为种类前加一个"on"。
	②取消事件注册

		方式一：eventTarget.removeEventListener(type, listener[,useCapture])
		方式二：eventTarget.("on"+type) = null;
	③事件触发
	除了在最开始说的点击按钮触发这样的一类触发事件的方式外，还可以程序代码中实现。
		eventTarget.dispatchEvent(type);

	④浏览器兼容（IE6.7.8）
		事件注册与取消
			attchEvent/detachEvent

		事件触发
			fireEvent(e)
	注：无捕获阶段。

总：兼容的代码见：../test/event/add_delEvent.html
三.事件对象（event）
当事件被触发的时候，会调用事件处理函数。处理函数会传入一些信息，这些信息代表了当前事件的状态。这就是事件对象。也就是处理函传入的是事件对象。
	①属性
		-type
		-target(srcElement,这是IE低版本的兼容属性)(事件触发的节点)
		-currentTarget(当前处理事件节点的函数，这是因为事件注册可以是其他节点)
	②方法
		-stopPropagation(阻止冒泡,阻止事件传播到父节点)
			event.stopPropagation() (W3C)
			event.cancelBubble = true (IE)

		-preventDefault(阻止默认事件)
			event.preventDefault() (W3C)
			event.returnValue = false (IE)

		-stopImmediatePropagation(阻止冒泡)
			在stopPropagation的基础上，还做了一件事：阻止当前节点的后续添加的事件，使其无法触发。

四.事件分类
	1.MouseEvent
		①MouseEvent对象属性
			-clientX,clientY(见图)
			-screenX,screenY
			-ctrlKey,shiftKey,altKey,metaKey(属性值都是boolean类型，如果当鼠标按下的时候同时按了上述的按键，那么相应的属性值为true，否则就是false)
			-button(0,1,2)(分别表示鼠标的左中右按键)

		②类型（见图）
			click					冒泡（下同）
			dbclick
			mousedown
			mousemove
			mouseout
			mouseover
			mouseup
			mouseenter		不冒泡（下同）
			mouseleave

		注：mouseover和mouseenter的区别（mouseout和mouseleave区别类似）
			 给元素绑定mouseover事件，进入元素区域时会触发，但是如果元素有嵌套子元素。那么当鼠标经过其子元素时，同样会触发mouseover事件。这个容易理解：mouseover是可以冒泡的，那么在其子元素冒泡之后，便能够触发父容器的mouseover事件。
			 而mouseenter则只能触发一次，原因相同，它不支持冒泡。
			 从下面的例子可以看出，mouseover在mouseenter之前触发，同样地，mouseout在mouseleave之前触发。
		③顺序
			例：从元素A上方移过
				- mousemove(多次) -> mouseover(A) ->mouseenter(A) -> mousemove(A)(多个) -> mouseout(A) -> mouseleave(A)
				解读： 
					在元素A的外部和内部其实都会触发多个mousemove属性，具体多少个要根据浏览器内部对于多长距离触发一次mousemove有关。
					mouseenter和mouseleave都只会触发一次。mouseover和mouseout同样。
			例：点击元素
				- mousedown -> [mousemove] ->mouseup -> click
			实际案例：../test/event/drafting.js


	2.WheelEvent对象(继承于MouseEvent)
		①属性
			-deltaMode
			-deltaX
			-deltaY
			-deltaZ

	3.FocusEvent
		①类型
			-blur				不冒泡（下同）
			-focus
			-focusin（即将获得焦点）
			-focusout（即将失去焦点）

		②FocusEvent对象
			属性
				-relatedTarget（焦点只有一个，指向刚失去焦点的元素）


	4.InputEvent
		①事件类型
			beforeinput   冒泡
			input 				冒泡

		注：IE低版本下使用onpropertychange()代替input事件。

				beforeinput是在input事件之前触发，也就是在用户输入内容之后，但是页面上还不显示的这个阶段。这个事件可以对输入进行一些处理，比如改变一些行为。例如：输入password时，对用户的输入进行隐藏。
				这个例子还有待确认，不一定是指我说的这个方式。
	

	5.keyboardEvent
		①事件类型
			keydown   	冒泡
			keyup				冒泡

		②KeyboardEvent对象
			属性
				-key
				-code
				-ctrlKey, shiftKey, altKey, metaKey
				-repeat	(规定在按键一直被按下是，是否输入连续多个字)
				-keyCode (code的ascii码)
				-charCode
				-which

	6.Event
		①事件类型
			load（加载完当前页面）		不冒泡（同下）
			unload（关闭当前页面）
			error（加载出现异常，如给img标签添加了错误url地址）
			select
			abort (退出的时候，在window和img中使用，如在一张img的加载过程中，如果按下了esc按键，那么调用当前事件)

		②window
			load,unload,error,abort

		③Image
			load,error,abort

			例子：<image alt="photo" src="http://www.163.com/photo.jpg" onerror="this.src='htttp://www.163.com/default.jpg'"/>
			解读：在src无法访问的情况下，设置一个onerror事件，让图片调用一种默认图片。

	7.UIEvent
		①事件类型
			-resize
			-scroll		


5.事件代理
将事件注册到元素的父节点上（这个不一定是直接父节点，可以是更高层次的祖父节点）
	优点
		-需要管理的handler更少
		-内存分配更少
		-增加/删除节点可以不处理事件
	缺点
		-事件管理的逻辑更复杂
		举例：在父元素注册事件，然后子元素或者子元素的子元素都能够冒泡，那么需要在父元素的实现逻辑上处理这些区别。区分出实际要处理的元素。

使用场景：众多的优点，时间代理在实际中用到很多。但是他的缺点让人望而却步。所以在实际过程中，往往在实现的子元素逻辑相似的场景下。例如：ul下的多个li元素。他们的需要达成的效果基本相同，逻辑实现相对简单。

























