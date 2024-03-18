//匿名函数自调用
(function(){
  //msg是私有数据
  var msg = 'day day up';
  //操作数据的函数
  function doSomeThing(){
    console.log('doSomeThing() '+msg.toUpperCase())
  };
  function doOtherThing(){
    console.log('doOtherThing() '+msg.toLowerCase())
  };
  //将向外暴露对象添加为 window的属性(给外部使用的方法)
  window.myModule2 = {
    doSomeThing: doSomeThing,
    doOtherThing: doOtherThing
  };
})();