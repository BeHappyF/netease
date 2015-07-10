var xhr = new XMLHttpRequest();	//创建XHR对象

//处理返回数据
// 在xhr的readyState发生改变的时候，会调用onreadystatechange事件。
// 可以用onload事件代替onreadystatechange事件。不过只有在readyState==4并且status==200时，才会去调用onload事件。
xhr.onreadystatechange = function (callback) {
	if(xhr.readyState == 4) {
		if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
			callback(xhr.responseText);
		} else {
			alert("Request was unsuccessful:" + xhr.status);
		}
	}
}

xhr.open('get', 'example.json', true);
xhr.setRequestHeader('myHeader', 'myValue');	//发送请求
xhr.send(null);