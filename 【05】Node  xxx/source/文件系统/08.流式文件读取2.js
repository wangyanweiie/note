/*--------------------------------------------
pipe()函数：可以将可读流中的内容直接输出到可写流中
语法：可读流名.pipe(可写流名);
----------------------------------------------*/

// 引入 fs 文件系统
var fs = require("fs");
// 创建一个可读流
var rs = fs.createReadStream("Hi.mp3");
// 创建一个可写流
var ws = fs.createWriteStream("Lemon.mp3");
// 可读流中的内容输出到可写流中
rs.pipe(ws);
