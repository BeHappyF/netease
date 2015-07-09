var ctx = document.getElementById('canvas').getContext("2d");

ctx.globalCompositeOperation = "destination-over";
ctx.clearRect(0,0,300,300);	//clear canvas

//绘制图形
ctx.fillStyle = "rgba(0,0,0,0.4)";
ctx.stokeStyle = "rgba(0,153,255,0.4)";
ctx.save();		//保存画布状态
ctx.translate(150,150);

//Earth 
var time = new Date();
ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds()  );
ctx.translate(105, 0);
ctx.fillRect(0, -12, 50, 24);	//Shadow
ctx.drawImage(earth, -12, -12);

//Moon
ctx.rotate( ((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds()  );
ctx.translate(0,28.5);
ctx.drawImage(moon,-3.5,-3.5);

ctx.restore();   //恢复画布状态

ctx.beginPath();
ctx.arc(150,150,105,0,Math.PI*2,false);   //Earth orbit
ctx.stroke();

ctx.drawImage(sun,0,0,300,300);

window.requestAnimationFrame(draw);