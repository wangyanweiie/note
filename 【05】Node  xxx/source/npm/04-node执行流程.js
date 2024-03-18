/*-----------------------------------------------------------
1、global
	理解：在node中有一个全局对象 global,它的作用和网页中window类似;
		在全局中创建的变量都会作为global的属性保存,在全局中创建的函数都会作为global的方法保存;

2、node执行代码
（1）流程
	* 首先在页面代码的最顶部添加如下代码:
 		function (exports, require, module, __filename, __dirname) {
 	* 再在页面代码的最底部添加如下代码:
 		}

（2）作用：实际上模块中的代码都是封装在一个函数中执行的,并且在函数执行时同时传递进了5个实参;
		* exports：该对象用来将变量或函数暴露到外部;
		* require：用来引入外部的模块的函数;
		* module
		 	- module代表的是当前模块本身
		 	- exports就是module的属性
		 	- 既可以使用 exports 导出,也可以使用module.exports导出;

		* __filename：当前模块的完整路径（F:\【05】NodeJs\source\01.node\04.-node执行流程.js）
	  * __dirname：当前文件模块所在文件夹的完整路径（F:\【05】NodeJs\source\01.node）

（3）函数中特有的变量：arguments
	* 作用：存放实参列表
	* 属性：arguments.callee 指向的是当前执行的函数对象Function
----------------------------------------------------------------------------------------*/
//a = 10;		//10
var a = 10; //undefined
console.log(global.a);

//输出当前函数内容
//console.log(arguments.callee + "");
console.log(arguments.length);

console.log(exports);
console.log(module.exports);
console.log(module.exports == exports);

console.log(__filename);
console.log(__dirname);
