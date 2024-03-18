//**********************匿名闭包优化********************
//优化: 创建一个全局变量moduleA用于接收函数中返回的obj对象
  var moduleA = (function (){
  //创建一个用于返回的对象
  var obj = {};
  var name = '小明';
  var age = 22;
  function sum(num1, num2) {
    return num1 + num2
  };
  var flag = true;
  if (flag) {
    console.log(sum(10,20));
  };

  //将需要使用的变量以及方法放到对象中进行返回
  obj.flag = flag;
  obj.sum = sum;
  return obj;
})();

//************ CommonJs *************
/*var name = '小明'
var age = 22
function sum(num1, num2) {
  return num1 + num2
}
var flag = true
if (flag) {
  console.log(sum(10, 20));
}
//将需要暴露到外部的变量通过export导出
module.exports = {
  flag: flag,
  sum: sum
}*/


