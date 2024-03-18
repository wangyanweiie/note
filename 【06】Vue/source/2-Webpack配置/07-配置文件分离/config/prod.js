//********dev:生产时依赖********
//引入merge合并配置文件prod与base
const webpackMerge = require("webpack-merge")
const baseConfig = require('./base.config')

//引入JS文件压缩的插件
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = webpackMerge(baseConfig,{
  plugins: [
    //plugins插件配置:打包时压缩Js文件
    new UglifyjsWebpackPlugin()
  ]
})