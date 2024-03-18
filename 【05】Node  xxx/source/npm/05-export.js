//引入HelloModule.js文件模块
var hello = require("./HelloModule");

/*---------------------------------------------
exports 与 module.exports区别
（1）exports暴露只能使用点.的方式来向外暴露内部变量
	* exports.xxx = xxx

（2）module.exports暴露既可以通过点.的形式,也可以直接赋值
	* module.exports.xxx = xxxx
	* module.exports = {}
---------------------------------------------------*/
console.log(hello.name);
console.log(hello.age);
hello.sayName();
