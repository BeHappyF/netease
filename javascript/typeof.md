基础：
typeof 100 						=== "number"
typeof "tsdf"					=== "string"
typeof true						=== "boolean"
typeof function () {} === "function"

typeof(undefined)) 		=== "undefined"
typeof(new Object()) 	=== "object"
typeof([1， 2]) 				=== "object"
typeof(NaN) 			  	=== "number"
typeof NaN						=== "number"
typeof Infinity				=== "number"



有一些有意思的typeof返回值。

typeof Object    			===	"function"
typeof Object()  			===	"object"
typeof new Object			===	"object"
typeof new Object() 	===	"object"
typeof Function				===	"function"
typeof Function() 		===	"function"
typeof new Funciton		===	"function"
typeof new Function() ===	"function"

总结一下：如果Object和（）或者new关键字组合（一个或者两个），那么返回"Object"。如果单独的Object则返回"Function".反过来如果是Function则无论如何都返回Function。

typeof null		"Object"

这是一个历史遗留问题。坑，要记住！