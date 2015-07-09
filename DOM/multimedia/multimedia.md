基本用法

	<audio src="music.mp3"></audio>
	<video src="movie.mov" width=320 height=240></video>
	解读：只有video占据页面标签，所以需要设置宽高，并且这里建议以内嵌样式的方式添加宽高。

兼容用法
	<audio>
		<source src="music.mp3" type="audio/mpeg">
		<source src="music.wav" type="audio/x-wav">
		<source src="music.ogg" type="audio/ogg">
	</audio>
	解读：在audio标签内添加多个source标签，兼容各浏览器的音频要求。并且type（可选）属性指定当前源的数据类型。可以帮助浏览器更快地定位到需要的资源，更快地进行解码。

	<video>
		<source src="movie.webm"
			type="video/webm; codecs='vp8, vorbis'">
		<source src="movie.mp4"
			type="vidio/mp4; codecs='avc1.42E01E, mp4a.40.2'">
	</video>

	检测当前浏览器是否兼容某种音频格式
		var a = new audio();
		a.canPlayType("audio/nav");
		解读：javascript内置了audio对象，只要新建一个这样的实例，然后调用实例的canPlayType方法。将要检测的音频格式作为字符串传入。有意思的是返回的值：如果支持则会返回“probably"或者"maybe"。而如果不支持则返回空字符串。很可惜，还没有实现video对象的内置。

HTML属性
audio和video的属性大致相同。如下：
	-src 			
	-controls
	-autoplay 
	-preload
	-loop
	解读：preload属性有三个值，默认值为none，即不预加载，还有两个值，分别是：metadata和auto。metadata表示只预加载媒体的元信息，而最后的则是预加载媒体信息.并且此属性与autoplay属性冲突，如果设置了autoplay属性，那么此属性失效。
	src属性是必须设置属性，支持相对和绝对路径。
	使用cotrols属性加载的控件为浏览器默认支持的控件类型。如果想要自己添加控件的话，那么需要使用到下述的方法和属性。

控制多媒体播放
	-load() 				加载媒体信息
 	-play() 				开始播放
	-pause() 				暂停播放

	-playbackRate 	播放速度（0~1为慢速播放,1为正常播放，大于1快速播放)
	-currentTime 		播放进度(以秒为单位，有效区间为媒体的有效时长)
	-volume 				音量（0~1之间的浮点数）
	-muted					静音（true就是静音）

查询多媒体状态(只读)
	-paused				暂停
	-seeking			跳转
	-ended				播放完成
	-duration 		媒体时长
	-initalTime 	媒体开始时间

多媒体相关事件
	-loadstart			开始请求媒体内容
	-loadmetadata		媒体元数据已经加载完成
	-canplay				加载了一些内容，可以开始播放
	-play						调用play()，或设置autoplay
	-waiting  			缓冲数据不够，播放暂停
	-playing 				正常播放
注：元信息包括视频时长，编码格式这类的信息，不包括多媒体具体内容。









