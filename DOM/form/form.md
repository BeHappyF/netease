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

	②reset接口
		-可重置元素：input，keygen，output，select，textarea.
		-触发表单reset事件，阻止该事件的默认行为可取消重置
		-元素重置时不再触发元素上的change和input事件

	③label
		-三个比较重要的属性，for指定label标签相关联的表单控件。在DOM节点的属性访问中由于关键字原因，此属性名称为htmlFor.
		-control，label标签指定for属性后，浏览器自动生成的属性。标示label标签所关联的表单控件节点。如果没有指定for属性，则为第一个子孙可关联元素
		-form，label标签所归属的表单节点。同样是浏览器自动生成。只读属性。但是可以通过设置:label.setAttribute('form','newFormId');
		-关联的表单控件可以和label标签不归属于同一个form.
	注：htmlFor
				关联表单控件激活行为，即：点击表单标签，会使表单控件节点被点击。即无形增加了表单控件的可点击范围。
				可关联元素：button,input(除hidden外),keygen,meter,output,progress,select,textarea

	④input
		-type 
			控件外观
			数据类型
			默认为text
		-实例：本地图片预览
			技术点：onchange,accept,multiple,files

	⑤select
		属性：
			-name
				下拉列表的名称，给表单通过名称查找提供。
			-value									
				为第一个选中选项的value值，如果没有选中，则为空
			-multiple
				选择器的多选控制
			-options[]
				包含下拉列表中的所有选项的一个数组,动态。
			-selectedOptions
				选择器下所有选中项的集合，动态。
			-selectedIndex
				选择器第一个选中选项的索引值。没有则返回-1.
			-add(element[,before])
				在指定位置之前添加选项，如果没有则在最后添加。
			-remove([index])
				根据索引值删除项目。

			注：optgroup
						给相关性大的选项做分组。
						-disabled
							当前分组下的所有选项为不可选状态
						-label	
							为选项组规定描述

					option 
						-value
							提交表单时给出的具体信息
						-text
							页面上用户可见的选项信息
						-index
							当前选项的索引值
						-selected
							表示当前选项是否选中
						-defaultSelected
							是否默认选中
		操作：
			创建选项：
				-document.createElement
				-new Option([text[,value[,defaultSelected[,selected]]]])

			注：
				document.createElement('option') === new Option()

				new Option('1.2 节点操作','1.2'); 等价于：
					var option = document.createElement('option');
					option.value = '1.2';
					option.textContent = '1.2 节点操作';
				两者都会生成：<option value='1.2'>1.2 节点操作</option>

			添加选项
				-insertAdjacentElement
				-select.add

			删除选项
				-removeChild
				-select.remove

	⑥textarea
		属性：
			-name
				通过名字属性取节点
			-value
				用户输入信息
			-select()
				全选当前用户输入的内容（全选后会触发select()事件)
			-selectionStart
				选中内容的起始位置,没有选中内容则返回光标所在位置
			-selectionEnd
				选中内容的结束位置，没有选中内容则返回光标所在位置
			-selectionDirection
				选择的方向，专指通过键盘的shift和左右键操作选择区域。有三个值：forward,backword,null.
				forward，左右键调整的selectionEnd处。
				backward,左右键调整的是selectionStart处。
			-setSelectionRange(start,end[, direction])
				也就是用代码选中文档内容
			-setRangeText(replacement[,start,end[,mode]])
				设置某个范围内的内容。start和end表示代码设置内容之后，光标出现的位置。


表单验证
	①验证元素
		-可验证元素：button，input，select，textarea
		-以下情况不做验证：
			a. input && type == {hidden,reset,button}
			b. button && type == {reset,button}
			c. input/textarea && readonly
			d. 作为datalist的子孙节点
			e. disabled
	

	②验证属性与接口：
		-willValidate
			显示表单控件在表单提交时是否会被验证。是一个只读属性。
		-checkValidity()
			通过这个接口直接验证，如果通过验证则返回true.
		-validity
			存储验证的结果。
		-validationMessage
			显示验证过后的异常信息
		-setCustomValidity(message)
			自定义验证异常下的显示信息
	③验证
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
			-oninvalid（事件）
			-setCustomValidity（接口）

		禁止验证

表单提交
	隐式提交
		-如：聚焦在输入框时按回车提交表单
		-满足以下任一条件：
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
			-name="isindex" && type="text"
				编码方式为application/x-www-form-urlencoded
				作为表单的第一个提交元素,提交时只发送value值，不包含name
			- name = "_charset_" && type = "hidden"
				没有设置value值
				提交时value自动用当前提交的字符集填充

		④submit（）
		作用：不通过页面的提交按钮而是通过程序的方式提交表单。

			onsubmit
				-在form.submit();时会被触发。
				-表单提交事件
				-提交之前的数据验证
				-阻止事件的默认行文可取消表单提交

		⑤无刷新表单提交
		  常见的是Ajax。
			-form
			-target
			-iframe

表单应用
	





