/*-----------------------------------------------
1、Buffer(缓冲区)
（1）理解
	* Buffer 的结构和数组很像,操作的方法也和数组类似;
	* 数组中不能存储二进制的文件,而 buffer 就是专门用来存储二进制数据;
	* 使用 buffer 不需要引入模块,直接使用即可;
	* buffer 中存储的都是二进制数据,但是在显示时都是以 16 进制的形式显示;
		- buffer 中每一个元素的范围：00-ff/ 0-255/ 00000000-11111111
		- 计算机的一个 0 或一个 1 ,我们称为 1 位（bit）
			8bit = 1byte（字节）
			1024byte = 1kb
	* buffer 中的一个元素占用内存的一个字节;
	* Buffer 的大小一旦确定则不能修改,Buffer 实际上是对底层内存的直接操作;
（2）方法
	* Buffer.from(str) 			将一个字符串转换为 buffer
	* Buffer.alloc(size) 		创建一个指定大小的 Buffer,元素全为 0;
	* Buffer.allocUnsafe(size) 	创建一个指定大小的 Buffer,但是元素可能包含敏感数据;
 	* buf.toString(n) 			将缓冲区中的数据转换为字符串
		- 只要数字在控制台或页面中输出显示的一定是10进制;
		- 可以通过 toString(n) 进行转换成不同的进制显示;
--------------------------------------------------------------------*/
var str = "Hello 尚硅谷";

//***********将一个字符串保存到buffer中*********
var buf = Buffer.from(str);

console.log(str.length); //字符串的长度:9
console.log(buf.length); //占用内存的大小:15
console.log(buf);

//**********创建一个指定大小的buffer************
//buffer的所有构造函数都废弃了,不推荐使用的
//var buf2 = new Buffer(10);

//alloc
var buf2 = Buffer.alloc(10);
//通过索引来操作buf中的元素
buf2[0] = 0;
buf2[1] = 255;
buf2[2] = 0xaa;
buf2[3] = 550; //26（超出最大范围高位溢出只留后8位二进制）
buf2[10] = 16; //不显示不报错
console.log(buf2);
console.log(buf2.length); //10

//toString
console.log(buf2[2]); //170
console.log(buf2[2].toString(16)); //aa
/*
for(var i=0 ; i<buf2.length ; i++){
	console.log(buf2[i]);
}
*/

//allocUnsafe(size)
var buf3 = Buffer.allocUnsafe(10);
console.log(buf3);

//from(str)
var buf4 = Buffer.from("我是一段文本数据");
console.log(buf4);
console.log(buf4.toString());
