一.window属性
	1.navigator
	浏览器信息
		-platform							当前电脑的平台(Win32,Mac)
		-navigator.userAgent  查看当前所用浏览器内核

	2.location
	浏览器定位和导航
		①属性：
			-href
				可以通过直接修改loacation的href属性达到页面跳转的作用
		②方法：
			-assign(url)
				载入新的url，记录浏览历史
			-replace(url)
				载入新的url,不记录浏览历史
			-reload()
				重载当前页

	3.history
	浏览器当前窗口的浏览历史
		①属性：
			-length			
				输出当前页面的浏览历史页面长度
		②方法：
			-back()    	
				正整数
			-forward() 	
				正整数
			-go() 			
				整数

	4.screen
	屏幕信息
	①属性：
		-screen.availWidth
			可用的屏幕宽度，以像素计，减去界面特性，比如窗口任务栏。
		-screen.availHeight 	
			可用的屏幕高度，同上。
	注：screen.width和screen.height的值比上述的大一些。因为有窗口任务栏之类的东西存在。
	还有两个属性pixelDepth和colorDepth分别表示屏幕的颜色分辨率和目标设备或缓冲器上的调色板的比特深度。两者的值大多都为24.


二.window事件
	1.load
		文档和所有图片加载完毕时
	2.unload
		离开当前文档时
	3.beforeunload
		和unload类似，但它提供询问用户是否确定离开的机会
	4.resize
		拖动改变浏览器窗口大小时
	5.scroll
		拖动滚动浏览器时

三.window方法
	1.alert(),confirm(),prompt()
		三种对话框

	2.setTimeout(),setInterval()
		计时器

	3.open(),close()
		开，关新窗口
		例子：var w = window.open("subwin.html", "subwin", "width=400,height=350,status=yes,resizable=yes")
		解读：三个参数分别是新打开页面的URL地址，二时页面名称，三则是一些打开页面的参数。如：页面的宽高：是否有工具栏，状态栏等等。
	注：要想关闭当前的新开窗口，如果是在父窗口下，则可以直接调用w.close()方法实现。如果是在在新开（子）窗口下操作关闭，则需要调用window.close()方法来实现。

	
	
		
	






















