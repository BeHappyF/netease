elements
	是Form对象的一个集合。elements集合可返回包含表单中所有元素的数组。
	元素在数组中出现的顺序和它们在表单的HTML源代码中出现的顺序一致。
	①该表单子孙表单空间（除图片按钮）
		包括-button,fileset,input,keygen,object,output,select,textarea
		不包括-< input type="image" >
	②归属于该表单的表单空间（除图片按钮）
注：是一个动态节点集合。

form
	①form[name]
		-返回id或name为指定名称的表单控件（除图片按钮）
		-如果结果为空，则返回id为指定名称的img元素
		-如果有多个同名元素，则返回这些元素的动态节点集合
		-一旦用指定元素取过该元素，则不管该元素的id或者name怎么变化，只要节点还在页面上均可使用原名称获取该元素

	②reset()
		-可重置元素：input，keygen，output，select，textarea.
		-触发表单reset事件，阻止该事件的默认行为可取消重置
		-元素重置时不再触发元素上的change和input事件


表单验证
	①验证元素
		-可验证元素：button，input，select，textarea
		-以下情况不做验证：
			a. input && type == {hidden,reset,button}
			b. button && type == {reset,button}
			c. input/textarea && readonly
			d. 作为datalist的子孙节点
			e. disabled

	②验证
		validity
			-valueMissing				描述了required没有value
			-typeMismatch    		value与type不符，如email,url
			-patternMismatch		value与pattern不匹配
			-tooLong						value长度超过maxlength指定的长度
			-tooShort  					value长度小于minlength指定的长度
			-rangeUnderflow	  	value值小于min指定的值
			-rangeOverflow			value值大于max指定的值
			-stepMismatch 			value值不符合step指定的值
			-badInput 					输入不完整
			-customError 				使用setCustomValidity设置了自定义错误
			-valid 							符合验证条件

		自定义异常
			-oninvalid
			-setCustomValidity

		禁止验证

表单提交
	隐式提交
		-如：聚焦在输入框时按回车提交表单
		-满足以下任意条件：
			表单有非禁用的提交按钮
			没有提交按钮时，不超过一个类型为text,search,url,email,passwor,date,time,number的input元素

	提交过程
		-根据表单enctype指定的值构建要提交的数据结构
		-使用method指定的方式发送数据到action指定的目标
		
		①构建提交数据
			-从可提交元素中提取数据组装成指定的数据结构的过程
			-可提交元素：button,input,keygen,object,select,textarea
		
		②编码方式（enctype）
			-application/x-www-form-urlencoded[默认]
			-multipart/form-data
			-text/plain

		③特殊案例
			- name = "_charset_" && type = "hidden"
				没有设置value值
				提交时value自动用当前提交的字符集填充

		④onsubmit
			-表单提交事件
			-提交之前的数据验证
			-阻止事件的默认行文可取消表单提交

		⑤无刷新表单提交
			-form
			-target
			-iframe


select 
	对象集合
		-options[]	返回包含下拉列表的所有选项的一个数组
	方法
		-add() 	 		向下拉列表添加一个选项
		-remove() 	向下拉列表删除一个选项
		-blur()
		-focus()
	事件
		-change			当改变选择时调用的事件





