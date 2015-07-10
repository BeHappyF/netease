HTTP事务
	请求报文：包含命令和URL的HTTP请求报文
	响应报文：包含事务结果的HTTP响应报文

请求报文
	头行：http的方法(get/post)，主机地址，http的版本
	头部：有许多键值对构成。
	请求体：
注：如果http方法为get，请求体为空。
	
响应报文
	头行：HTTP版本，HTTP状态码，HTTP状态码描述
	头部：有许多键值对构成。
	响应体（主体）：html代码。

URL构成

例子,一个完整的URL:
http://www.163.com:8080/index.html?r=admin&lang=zn-CN#news

protocol						http
hostname						www.163.com
port								8080
host								www.163.com:8080
pathname						index.html
search							r=admin&lang=zn-CN
hash								news


HTTP版本

1.HTTP/0.9
	1991年，HTTP的原型，有许多设计缺陷
2.HTTP/1.0
	很快取代HTTP/0.9，成为第一个广泛应用的版本
3.HTTP/1.0+
	添加持久的keep-alive连接，虚拟主机支持，以及代理连接支持，成为非官方的事实标准
4.HTTP/1.1
	校正了结构性缺陷，明确语义，引入重要的性能优化措施，删除不好特性，是当前使用的版本



ajax

open
开启一个请求待发送。但不会正式向服务器端发请求。
	例子：xhr.open(method, url[ , async = true]);
	
setRequestHeader (可选)
可以在请求体头部设置一些字段。
	xhr.setRequestHeader(header, value);


send
	xhr.send([data = null]);
	data可为string何formdata类型。不过如果为formdata则需要修改字段中的ContentType键值对。

请求参数序列化

	xhr.open('get'
		,'example.json?' + 'name1=value1&name2=value2'
		, true);

同源策略
两个页面具有相同的协议(protocol)，端口(port),和主机(host)，那么这两个页面就属于同一个源（origin）。

跨域资源访问
	不满足同源策略的资源访问，叫跨域资源访问。
	1.W3C定义了CORS
		现代浏览器已经实现对CORS的支持
	2.其他跨域技术
		-Frame代理
		-JOSNP
			JSON with padding(填充式JSON)
			<script>可以跨域
			请求一段js代码
		-Comet
		-Web Sockets
		...













