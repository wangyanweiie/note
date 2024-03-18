function fibonacci(n){
  return n<=2 ? 1 : fibonacci(n-1) + fibonacci(n-2);
}
//console.log(this);
/*全局对象的属性可以直接使用,worker也有自己的全局对象,即此时 this指向的,
而在其全局对象中就有 onmessage()、postMessage()等方法,所以可以直接使用;*/
this.onmessage = function(event){
  //event.data中就保存了需要接收的数据
  var number = event.data;
  console.log('分线程接收到主线程发送的数据: '+number);
  var result = fibonacci(number);
  postMessage(result);
  console.log('分线程向主线程返回的数据: '+result);
  //alert(result);  alert是 window的方法,在分线程不能调用;
  //分线程中的全局对象不再是 window, 所以在分线程中不可能更新界面;
};