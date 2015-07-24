一.模块组织（js)
	语言的模块支持
		java	  : import
		C# 		  : using
		css		  : @import
		javascript: None!
	
	模块
		-封装实现
		-暴露接口
		-声明依赖

		反模式
		IIFE
			-显示依赖声明
			-仍然污染了全局变量
			-必须手动进行依赖管理
	 		命名空间

	模块系统
		-依赖管理
			加载/分析/注入/初始化
		-决定模块写法

	AMD（库级别支持）		Asynchronous Module Definition
		-优点：依赖管理成熟可靠；社区活跃，规范接受度高；专为异步IO环境打造，适合浏览器环境；支持类似Commonjs的书写方式；通过插件API可支持加载非JS资源；成熟的打包构建工具，并可结合插件。
		-缺点：模块定义繁琐，需要额外嵌套；只是库级别的支持，需要引入额外库；无法处理循环依赖；无法实现条件加载。
	Commonjs
		-优点：依赖管理成熟可靠；社区活跃，规范接受度高；运行时支持，模块定义非常简单（文件级别的作用域）；文件级别的模块作用域隔离；可以处理循环依赖；
		-缺点：不是标准组织的规范；同步的require，没有考虑浏览器环境（异步加载）。
		-工具：browserify，将多个文件级别的模块打包成一个文件。这样只需要引入一个文件就能够使用。
	ES6
		-优点：真正的规范，未来的模块标准；语言级别的关键字支持；适应所有javascript运行时，包括浏览器；可处理循环依赖。
		-缺点：规范并未达到稳定级别；基本还没有浏览器支持；现有项目使用，即使有大量的6to5的transpiler.

	Systemjs			Universal dynamic module loader
		-优点：支持加载AMD,Commonjs,ES6;支持Transpiler,可支持任意资源；


二.框架
	库
		针对特定问题的解答
		不控制应用程序
		被动的被调用

	框架
		Inverse of control（区别类库的最大区别）
		决定应用程序生命周期
		一般会集成大量的库

	解决方案：(外部)
		DOM（jQuery)
		Communication
		Utility
		Templating
		Component
		Routing
		Architecture

	Why:
		开发效率
		可靠性：浏览器兼容性/测试覆盖
		更好地配套：文档/demo/工具
		设计的更好
		专业性

	Why not:
		问题过于简单；
		备选框架质量与可控性无法保证；
		无法满足当前业务需求；
		团队中已有相关积累；

	How:
		开放：基于一个外部模块系统，自由组合；
		半开放：基于一个定制过的模块系统，内部-外部的解决方案共存；
		大教堂:深度定制的模块系统，很少需要引入外部模块。

	
	DOM
		具体操作：
			-Selector
			-Manipulation
			-Event(dom)
			-Animation
		职责：提供便利的Dom查询/操作/移动等操作；
			 提供事件绑定/事件代理等支持；
			 提供浏览器特性检测，UA侦测；
			 提供节点属性、样式、类名等操作；
			 所有以上操作实现目标平台的跨浏览器支持。
		实例
			-jQuery
					//通过选择器获得一个节点，不是原生Dom对象，而是包装的jQuery对象
				例：$('button.j-submit')			
				     //添加节点类名
				     .addClass('disable')	
				     .attr('title','Waiting...')	
				     //修改节点innerHTML
				     .html('Waiting...')			
				     //绑定事件
				     .on('click', showWarning)		
				     //添加到选择器.j-form对应节点
				     .appendTo('.j-form')

			-zepto.js(没有实现jQuery内所有的接口，同名接口与jQuery相兼容)
			 	例：$('button.j-submit')
			 		 .addClass('disable')
			 		 .attr('title','Waiting...')
			 		 .html('Waiting...')
			 		 .on('click', showWarning)
			 		 .appendTo('.j-form')
	
			-mootools
				-虽然关注度减弱，但是内部实现和接口都是十分出色，严格遵守Command-Query
				-扩充了许多的接口，方法是直接扩展了Dom对象原生,在Dom对象的原型上添加方法。
					Element.prototype.inject = function() {}
					Element.prototype.set = function() {}
				例：$('button.j-submit') 		//获取的是原生Dom对象！
				 	 .addClass('disable')
				 	 .setAttribute('title','Waiting...')
				 	 .set('html', 'Waiting...')
				 	 .addEvent('click', showWarning)
				 	 .inject('.j-form')

			比较：
				mootools（最好的源码阅读学习的资料）
					简介：
						-730star
						-size:96k
						-兼容性：IE6+
					优点：
						概念清晰，没有包装对象；
						接口设计优秀；
						源码清晰易懂；
						不局限于Dom和Ajax.
					缺点：
						扩展原生对象（致命）
						社区衰弱

				jQuery（最稳妥）
					简介：
						33728star
						size:94k
						兼容性：IE6+
					优点：
						社区强大，普及率高
						包装对象，不污染原生
						基本上专注于Dom
					缺点：
						包装对象，容易混淆
						接口两义性
						社区水平层次不齐，容易踩坑

				zepto.js（移动端的备选品）
					简介：
						8236star
						size:25k
						兼容性：IE10+
					优点：
						小，启动快
						接口与jQuery兼容
						提供了简单的手势
					缺点：
						与jQuery不能做到100%对应
						支持浏览器少，功能较弱

			Dom(专业领域)	
				手势
					Hammer.js
						10029star
						size:12k
						issue:444/600
						Desc:常见手势封装，包括tap,hold,transform.,swipe等等，并支持自定义扩展。
				局部滚动(是由于手机端浏览器的兼容性问题，现在的使用在减少)
					iscroll.js
						5200star
						issue:380/640
						size:13k
						Desc:移动端position:fix + overflow:scroll的救星
				高级动画
					Velocity.js
						10029star
						12k
						issues:400/411
						Desc:复杂动画序列实现，不仅限于dom
				视频播放：
					video.js
					83oostar
					size:101k
					issue:1160/1290
					desc:类似原生video标签的使用方式，对低级浏览器回退到flash播放
			总结：issue总量与解决率比star更关键

	Communication
		XmlHttpRequest / Form / JSONP / Socket
		职责：
			处理与服务器的请求与响应
			预处理请求数据/响应数据Error/Success的判断封装
			多种类型请求，统一接口（xmlHttpRequest1/2,JSONP,Iframe)
			处理浏览器兼容性
		实例：
			Reqwest
				优点：JSONP支持；稳定/IE6+ support;CORS跨域；Promise/A支持
			qwest
				优点：更小的代码量；XmlHttpRequest2；CORS跨域；支持高级数据类型如ArrayBuffer,Blob和FormData
			socket.io
				优点：实时性；支持二进制数据流；智能自动的回退支持（非二进制数据流）；多种后端语言支持（较为稳妥的后端语言是node.js）。

	Utility
		函数增强 & shim / Flow Control
		职能：
			提供JS原生不提供的功能
			方法门面包装，使其更易于使用
			异步队列/流程控制等等
			
