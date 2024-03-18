/*--------------------------------------------------------
4、异步文件写入
 （1）打开文件
 	* 语法：fs.open(path, flags, mode, callback(err, fd){})
	 		- path		要打开文件的路径
			- flags		打开文件要做的操作的类型（r 可读 w 可写）
			- mode		设置文件的操作权限（一般不传）
			* 回调函数：回调函数中的代码是后执行的;
					- err	错误对象,没有错误则为 null
					- fd	文件描述符
    * 返回值：异步调用的方法结果都是通过回调函数的参数返回的;

 （2）向文件中写入内容
 	* 语法：fs.write(fd, string, position, encoding, callback(err){})
	 		- fd 		写入的文件的描述符
			- string 	要写入的内容
			- position 	写入的起始位置（一般不传）
			- encoding 	写入的编码（一般不传）
			- 回调 err	错误对象

（3）保存关闭文件
 	* 语法：fs.close(fd, callback(err){})
			- fd 		写入的文件的描述符
	 		- 回调 err	错误对象
 ----------------------------------------------------------*/

//引入fs模块
var fs = require("fs");

//打开文件
fs.open("hello2.txt", "w", function (err, fd) {
  //判断是否出错
  if (!err) {
    //如果没有出错,则对文件进行写入操作;
    fs.write(fd, "wyw 异步写入数据的内容", function (err) {
      if (!err) {
        console.log("写入成功！");
      }

      //关闭文件
      fs.close(fd, function (err) {
        if (!err) {
          console.log("文件已关闭！");
        }
      });
    });
  }
  //出错则输出错误信息
  else {
    console.log(err);
  }
});

console.log("程序向下执行！"); //在文件回调前执行
