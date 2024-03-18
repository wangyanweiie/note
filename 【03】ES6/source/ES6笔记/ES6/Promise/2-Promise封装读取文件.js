/*
当前目录  ./
上层目录  ../
*/

//**********先引入fs模块*********
const fs = require('fs');

//********调用方法读取文件********
/*
fs.readFile('./resources/为学.md',(err, data)=>{
    //如果读取失败,则抛出错误
    if(err) throw err;
    //否则输出内容
    console.log(data.toString());
});
*/

//********使用Promise封装********
const p = new Promise(function(resolve, reject){
    fs.readFile("./resources/为学.md",(err, data)=>{
        //判断如果失败
        if(err) reject(err);
        //如果成功
        resolve(data);
    });
});
p.then(function(value){
    //将获得的二进制代码通过toString转化为字符串
    console.log(value.toString());
},function(reason){
    console.log("读取失败!!");
});