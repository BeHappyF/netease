<p>
	请输入用户名：<input	type="text" id="demo"/>
	<span id="result"></span>
</p>

<script type="text/javascript">
	document.getElementById("demo").onblue = function () {
		var thisNode = this;
		var span = document.getElementById("result");
		var xmpHttp;
		try {
			// code for IE7.0+, Firefox, Chrome, Opera, Safari
			xmpHttp = new XMLHttpRequest();
		} catch(e) {
			//code for IE5, IE6
			xmpHttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmpHttp.onreadystatechange = function () {
			if(xmpHttp.readyState < 4) {
				span.style.color = "blue";
				span.innerHTML = "checking...";
			}
			if(xmlHttp.readyState == 4 && xmlHttp.status = 200) {
				if(parseInt(xmlHttp.responseText)) {
					span.style.color = "red";
					span.innerHTML = "sorry,it's already exists..";
				} else {
					span.style.color = "green";
					span.innerHTML = "Congraduation";
				}
			}
		}

		xmlHttp.open("POST", "/demo/ajaxDemo.php?action=checkUserName", true);
		xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xmlHttp.send("username=" + thisNode.value);
	}