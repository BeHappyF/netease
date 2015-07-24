// reqwest
reqwest({
	url:'http://www.filltext.com/'

	,type: 'jsonp'		//支持JSONP方式

	,success: function  (resp) {
		var ret = [];
		resp.forEach(function (item) {
			ret.push(item.frame + '<br />');
		});
		document.getElementById('results').innerHTML = ret.join('')
	}
})


// qwest
qwest.<method>(<url>,[data],[options])
	.then(function (response) {
		//Run when the request is successful
	})
	.catch(function (e, url) {
		//Process the error
	})
	.complete(function () {
		//Always run
	});