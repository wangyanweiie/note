/*----------------------------------------
1、模块化
	理解：在Node中一个js文件就是一个模块; 
		每一个js文件中的js代码都是独立运行在一个函数中,而不是全局作用域;
		所以一个模块的中的变量和函数无法在其他模块中直接访问;
2、export
（1）作用：可以通过 exports 来向外部暴露变量和方法;
（2）语法：只需要将需要暴露给外部的变量或方法设置为exports的属性即可;
	* exports.变量名 = "..";
 ------------------------------------------------*/
//输出语句
console.log("我是02.module.js");

//向外部暴露属性或方法
exports.x = "我是x";
exports.y = "我是y";
exports.fn = function(){};


