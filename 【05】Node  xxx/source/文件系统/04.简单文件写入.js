/*-------------------------------------------------
5、简单文件写入
（1）异步
	* 语法：fs.writeFile(file, data, options { ecoding, mode, flags }, callback(err){})
		- file 		要操作的文件的路径（相对路径/绝对路径：由于 \ 是转义字符故要用 \\ 表示 \）
		- data 		要写入的数据
		- options 	可以对写入进行一些设置（一般不传）
		- callback 	当写入完成后执行回调函数（一般不传）
（2）同步
	* 语法：fs.writeFileSync(file, data, options {})
		- file 		要操作的文件的路径
		- data 		要写入的数据
		- options 	可以对写入进行一些设置

6、flags
	* r		读取文件, 文件不存在则出现异常读写文件;
	* r+	读写文件, 文件不存在则出现异常;
	* w		打开文件用于写操作, 不存在则创建, 存在则截断;
	* w+	打开文件用于读写, 不存在则创建, 存在则截断;
	* a		打开文件用于追加, 不存在则创建;
	* a+	打开文件进行读取和追加, 不存在则创建该文件;
-----------------------------------------------------*/
var fs = require("fs");

// 绝对路径：异步
fs.writeFile(
  "C:\\Users\\Lemon\\Desktop\\Hello.txt",
  "writeFile 绝对路径写入的内容;",
  { flag: "w" },
  function (err) {
    if (!err) {
      console.log("写入成功！！");
    } else {
      console.log(err);
    }
  }
);

// 相对路径：异步
fs.writeFile(
  "hello3.txt",
  "writeFile 相对路径写入的内容;",
  { flag: "a" },
  function (err) {
    if (!err) {
      console.log("写入成功！");
    } else {
      console.log(err);
    }
  }
);
