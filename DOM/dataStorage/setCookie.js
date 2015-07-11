
//这是一个简单的添加cookie的方式，并且没有编码
document.cookie = "name = value";

// 通过给cookie的键值对编码，并且添加expires,path,domain,secure等信息。添加一个具体的cookie
// expires表示存在时间，允许客户端在这个事件之前不去检查（发请求）。等同于max-age的效果。如果同时存在，
// 则被Cache-Control的max-age覆盖。并且必须是GMT格式。
// 如果想让cookie的存在期限超过当前浏览器会话时间，就必须使用这个属性。当过了到期日期时，浏览器就可以删除cookie文件，没有任何影响。

// Path – 路径。指定与cookie关联的WEB页。

// Domain – 域。指定关联的WEB服务器或域。

// Secure – 安全。指定cookie的值通过网络如何在用户和WEB服务器之间传递。

//具体内容参阅：http://www.cnblogs.com/cxd4321/archive/2008/11/14/1333696.html

// 以下六个参数都算是cookie的属性。
function setCookie (name, value, expires, path, domain, secure) {
	var  cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
	if(expires) 
		cookie += "; expires" + expires.toGMTString();
	if(path)
		cookie += "; path" + path;
	if(domain) 
		cookie += "; domain" + domain;
	if(secure)
		cookie += "; secure" + secure;

	document.cookie = cookie;
}