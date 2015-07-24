// 1.反模式
// math.js
// 分析：封装性无；接口结构不明显。
function add(a, b) {
	return a + b;
}
function sub(a, b) {
	return a - b;
}
// caculator.js
// 没有依赖声明，使用全局状态。
var action = "add";

function compute(a, b) {
	switch (action){
		case 'add': return add(a, b);
		case 'sub': return sub(a, b);
	}
}

// 2.对象字面量
// math.js
// 结构性好
// 没有访问控制
var math = {
	add: function add(a, b) {
		return a + b;
	},
	sub: function sub(a, b) {
		return a - b;
	}
}

// caculator.js
// 同样没有声明依赖,即无法表明一个属性是私有的
var caculator = {
	action: 'add',
	compute; function compute(a, b) {
		switch(action){
			case 'add': return math.add(a, b);
			case 'sub': return math.sub(a, b);
		}
	}
}




// 3.IIEF	Immediately-invoked Function Expression：自执型函数表达式
// 创建一个局部作用域，通过return输出需要的接口。
//caculator-1.js
// 访问控制（有局部变量，外部无法访问）
// 无依赖声明。
var caculator = (function () {
	// 不会暴露变量到外部
	var action = 'add';

	return {
		// 利用闭包能够访问的局部变量，并且能够让外部调用。
		compute: function (a, b) {
			switch (action) {
				case 'add':
					return math.add(a, b);
				case 'sub':
					return math.add(a, b);
			}
		}
	}
});
//caculator-2.js
// 显示依赖声明
// 依然污染了全局变量，必须手动进行依赖管理。
var caculator = (function (m) {
	var action = 'add';
	// 将函数声明定义在函数内部
	function compute (a, b) {
		case 'add':
			return m.add(a, b)
		case 'sub':
			return m.add(a, b)
	}
	return {
		// 学名：揭露模块模式
		// 只暴露一个接口
		compute: compute
	}
// 这里有一个全局的变量，需要手动的传入，所以污染了全局变量，而且需要手动管理。
})( math );

// 4.namespace
// 没有解决依赖管理的问题
// math.js
namespace('math', [], function() {
	function add(a, b) {
		return a + b;
	}
	function sub(a, b) {
		return a - b;
	}

	return {
		add: add,
		sub: sub
	}
});

// caculator.js
// ['math']是一个依赖声明， m为依赖注入
namespace('caculator', ['math'], function(m) {
	var action = 'add';
	function compute(a, b) {
		return m[action](a, b);
	}
	return {
		compute: compute
	}
});

var namespace = (function () {
	var cache = {};	//缓存所有模块
	// 参数：模块名，依赖列表，定义
	function createModule (name, deps, definition) {
		if( arguments.length === 1 ) return cache[name];

		// 必须先去的所有依赖的模块
		deps = deps.map(function (depName) {
			return ns(depName);
		});

		cache[name] = definition.apply(null, deps);

		return cache[name];
	}
	return createModule;
})();

// Commonjs
// math.js
function add (a, b) {
	return a + b;
}
function sub (a, b) {
	return a - b;
}

exports.add = add
exports.sub = sub

// caculator.js
var math = require('./math');		//依赖声明，require定义为同步

function Caculator (container) {
	
	this.left = container.querySelector('.j-left');
	this.right = container.querySelector('.j-right');
	this.add = container.querySelector('.j-add');
	this.result = container.querySelector('.j-result');

	this.add.addEventListener('click',
		this.compute.bind(this));
}
Caculator.prototype.compute = function () {
	this.result.textContent = math.add(+this.left.value,
		+this.right.value);
}

exports.Caculator = Caculator;		//接口暴露


//AMD
// math.js
define( [], function () {
	function add (a, b) {
		return a + b;
	}
	function sub (a, b) {
		return a - b;
	}

	// 接口暴露
	return {
		add: add,
		sub: sub
	}
});

// caculator.js
define(['./math'], function (math) {  // 依赖声明和依赖注入
	function Caculator (container) {
		this.left = container.querySelector('.j-left');
		this.right = container.querySelector('.j-right');
		this.add = container.querySelector('.j-add');
		this.result = container.querySelector('.j-result');

		//
	}

	Caculator.prototype.compute = function  () {}

	return {
		Caculator: Caculator
	}
});

// Loader Plugins 草案阶段
// 完整组件=结构+逻辑+样式
define(['regularjs',
	'tetxt!path/to/foo.html',	//文本类资源依赖
	'css!path/to/style.css'		//加载CSS资源
	], function (Regular, template) {
	//通过text插件，template是通过ajax加载的纯文本
	Component = Regular.extend({
		template:template,		//已经是字符串文本
		show: function () {},
		hide: function () {}
	})	

	//略。。
	return Component
})

// ES6/module
// math.js
function add (a, b) {
	return a + b;
}
function sub (a, b) {
	return a - b;
}

export {add, sub}				//export关键字 接口暴露


// caculator.js
import {add} from './math';		//import关键字 引入依赖

class Caculator {				//终于有了class关键字
	constructor(container) {}
	compute() {
		this.result.textContent 
			= add(+this.left.value, +this.right.value)
	}
}

export {Caculator}