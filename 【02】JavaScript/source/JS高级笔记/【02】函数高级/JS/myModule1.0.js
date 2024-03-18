function myModule(){
  // msg是函数内部的私有数据
  var msg = 'good good study';
  //操作数据的函数
  function doSomeThing(){
    console.log('doSomeThing() '+ msg.toUpperCase())
  };
  function doOtherThing (){
    console.log('doOtherThing() '+ msg.toLowerCase())
  };
  //向外暴露一个函数
  //return doSomeThing

  //通过 return向外暴露对象(给外部使用的方法)里面放了两个函数/方法
  return {
    //键名是字符串：键值是函数名
    doSomeThing: doSomeThing,
    doOtherThing: doOtherThing
  };
};
