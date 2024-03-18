/*-------------------------------
	1.同步文件读取（同写入改 flags）
	2.异步文件读取（同写入改 flags）
	3.简单文件读取
	（1）异步
		* 语法：fs.readFile(path, [options], callback(err,data){})
			- path 		要读取的文件的路径
	 		- options 	读取的选项
	 		- callback	回调函数,通过回调函数将读取到内容返回(err,data)
		* 回调函数的参数
	 		- err 	错误对象
	 		- data 	读取到的数据,会返回一个 Buffer;
	（2）同步
		* 语法：fs.readFileSync(path, [options])
	 		- path 		要读取的文件的路径
	 		- options 	读取的选项
-------------------------------------------------*/
var fs = require("fs");
//var path = "C:/Users/Lemon/Desktop/a.mp3";
//读取相对路径下的文件
fs.readFile("Hi.mp3", function (err, data) {
  if (!err) {
    console.log(data);
    //将读出的数据data写入到另一份文件中
    fs.writeFile("Hello.mp3", data, function (err) {
      if (!err) {
        console.log("文件写入成功");
      }
    });
  }
});
