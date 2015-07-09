基本用法
	<canvas id="tutorial" width="300" height="150"></canvas>
	解读：这里的宽高如果不指定，则默认是300px宽，150px高。可以通过css制定宽高，但是不建议。因为CSS和js的渲染时间上存在差异,可能造成失真。

	<canvas id="stockGraph" width="150" height="150">
		current stock price: $3.15 + 0.15
	</canvas>

	<canvas id="clock" width="150" height="150">
		<img src="images/clock.png" alt="" width="150" height="150"> 
	</canvas>

渲染上下文
	var canvas = document.getElementById("tutorial");
	var ctx = canvas.getContext("2d");	
	解读：ctx即为获得的渲染上下文对象。

	ctx.globalCompositeOperation = 'destination-over';
	解读：这个属性是设置页面中叠加物体的渲染结果。


注：代码的实例大多参考mdn，很多事原版的，少部分稍加修改。