//**********************匿名闭包优化********************
//使用分号,引用时避免干扰
//优化: 创建一个全局变量moduleB用于接收函数中返回的obj对象
;var moduleB = (function () {
  //创建一个用于返回导出的对象
  var obj = {}
  var name = '小红'
  var flag = false
  console.log(name);
  //将需要使用的变量以及方法放到对象中进行返回
  obj.flag = flag
  return obj
})()
