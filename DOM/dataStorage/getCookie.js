function getCookie () {
	var cookie = {};												//创建一个js对象储存cookie内的键值对
	var all = document.cookie;							//通过document的cookie属性获得cookie信息,cookie是一个字符串
	if( all === '')	return cookie; 				  //如果cookie为空，则返回一个空的js对象
	var list = all.split('; ');  						//cookie的键值对之间以分号加一个空格隔开
	for (var i=0; i<list.length; i++) {			//遍历cookie中的每一个键值对
		var item = list[i];										
		var p = item.indexOf('=');
		var name = item.substring(0, p);			//取得键值对的名称
		name = decodeURIComponent(name);			//cookie信息被编码，所以得到实际的信息需要解码
		var value = item.substring(p + 1);  	//获得cookie键值对的值。
		value = decodeURIComponent(value);		//同样需要解码
		cookie[name] = value;									//以给对象添加属性的方式将cookie信息转化为js对象
	}
	return cookie;
}

解读：这里之所以将"="分割开键值对。分别对名称和值进行解码。是因为"="没有被转码。
		 encodeURIComponent和decodeURIComponent两个方法需要对应才能够获得正确的值。



function getCookie () {
	var cookie = {};															
	var cString = document.cookie;								
	if(cString === '') return cookie;
	var items = cString.split("; ");
	for(var i=0, item; item = item[i]; i++) {
		var index = item.indexOf("=");
		var name  = item.substring(0, index);				
		var value = item.substring(index + 1);			
		name  =  name.decodeURIComponent(name);			
		value = value.decodeURIComponent(value);
		cookie[name] = value; 
	}
	return cookie;																
}