//**********************匿名闭包优化********************
;(function () {
  //使用文件aaa中接收了函数返回值的全局变量中的flag与sum属性
  if (moduleA.flag) {
    console.log('小明是天才, 哈哈哈');
  }
  console.log(moduleA.sum(40,50));
})()

//************ CommonJs *************
//导入aaa通过export暴露的变量
/*var aaa = require('./aaa.js')
var flag = aaa.flag;
var sum = aaa.sum;
//解构赋值写法
//var {flag, sum} = require('./aaa.js')
sum(20, 30)*/

