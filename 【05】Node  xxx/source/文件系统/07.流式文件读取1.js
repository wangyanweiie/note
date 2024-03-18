/*---------------------------------------------------------
4、流式文件读取
（1）作用：适用于一些比较大的文件,可以分多次将文件读取到内存中;
（2）语法：
	* 创建可读流与可写流
		- var 可读流名 = fs.createReadStream(path)
		- var 可写流名 = fs.createWriteStream(path,options{})

	* 监听流的 open 与 close事件
		- 流名.once("open",回调函数)	
		- 流名.once("close",回调函数)	为对象绑定一次性的事件;

	* 读取数据：读取一个可读流中的数据,必须为可读流绑定一个 data 事件;
		当 data 事件绑定完毕后,会自动开始读取数据;由于要分多次读取要用 on(事件字符串,回调函数);
		读取到的数据都是通过回调函数的参数返回的;
		- 可读流名.on("data",function(data){})

	* 写入数据：可写流名.write("内容");

	* 关闭可写流：可读流数据读取完毕时关闭可写流,即在可读流关闭的监听事件中关闭可写流;
		- 可写流名.end();
		- 可写流名.close();
-----------------------------------------------------------*/

var fs = require("fs");

// 创建一个可读流
var rs = fs.createReadStream("Hi.mp3");
// 创建一个可写流
var ws = fs.createWriteStream("July.mp3");

// 监听流的开启和关闭
rs.once("open", function () {
  console.log("可读流打开");
});
rs.once("close", function () {
  console.log("可读流关闭");
  // 数据读取完毕，关闭可写流
  ws.end();
});

ws.once("open", function () {
  console.log("可写流打开");
});
ws.once("close", function () {
  console.log("可写流关闭");
});

// 读取一个可读流中的数据必须要为可读流绑定一个data事件
rs.on("data", function (data) {
  // console.log(data.length);
  // 将读取到的数据写入到可写流中
  ws.write(data);
});
