//node语法:导入path包
const path = require('path')

//设置对应的入口路径与出口路径
module.exports = {
  entry: './src/main.js',
  //出口是对象类型: 路径+文件名
  output: {
    /*通过导入path模块动态获取导出路径,path.resolve()可以对两个路径进行拼接;
    __dirname是node上下文的全局对象,即当前文件所在的绝对路径地址;*/
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
}