//引入fs模块
const fs = require("fs");

//封装函数读取『为学』
function readWeiXue() {
  return new Promise((resolve, reject) => {
    fs.readFile("./resources/为学.md", (err, data) => {
      if (err) reject(err); //若失败直接 reject
      resolve(data);
    });
  });
}
//封装函数读取『插秧诗』
function readChaYangShi() {
  return new Promise((resolve, reject) => {
    fs.readFile("./resources/插秧诗.md", (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}
//封装函数读取『观书有感』
function readGuanShu() {
  return new Promise((resolve, reject) => {
    fs.readFile("./resources/观书有感.md", (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

//声明一个 async 函数
async function main() {
  //通过 await 获取为学内容返回值
  let weiXue = await readWeiXue();
  //通过 await 获取插秧诗内容返回值
  let chaYang = await readChaYangShi();
  //通过 await 获取观书有感内容返回值
  let guanShu = await readGuanShu();

  console.log(weiXue.toString());
  console.log(chaYang.toString());
  console.log(guanShu.toString());
}

//调用main函数
main();
