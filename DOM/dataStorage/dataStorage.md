一.cookie
	小型文本文件
	大小在4kb左右。由键值对（“=”）构成，键值对之间用分号和空格隔开。
	浏览器客户端是以domain,path, name作为Cookie的唯一标识的
	cookie在http请求中是明文传递的
	缺陷：
		流量代价
		安全性问题
		大小限制

storage
大小为5MB左右。
	-localStorage	
		如果用户不删除，那么有效期为永久
		浏览器的不同窗口之间不共享localStorage
	-sessionStorage
		浏览器的会话时间
		作用域由协议，主机名，端口决定

	JS对象
		读取
			-localStorage.name
		添加/修改
			-localStorage.name = "NetEase"		//String
		删除
			-delete localStorage.name
			-delete localStorage['name']

	API
		获取键值对数量
			-localStorage.length
		读取
			-localStorage.getItem("name")		
				通过访问键值对的名称获得对应的键值对的值,区分大小写
			-localStorage.key(i)
				通过访问键值对的索引值,返回值为键值对的名称。类型为字符串
		
		注：如果不知道localStroage的键值对名称。可以通过以下方式获取：
			localStorage.getItem(localStorage.key(1));
		添加/修改
			-localStorage.setItem("name", "NetEase");
				和localStorage.xxx的对象属性方式设置键值对结果相同。
		删除对应键值
			-localStorage.removeItem("name")
				没有返回值.此方法和localStorage的对象方式删除作用相同，但是有一点不同：因为此方法是字符串的传入参数，所以可以有不合法的表达式类型。而通过"."运算符则只能够传入合法表达式。当然对象方式也可以采用"[]"传入非法表达式。
		删除所有数据
			-localStorage.clear()
				同样没有返回值





















