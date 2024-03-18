//*******dev:开发时依赖*******
//引入merge合并配置文件dev与base
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig,{
  //搭建本地服务器
  devServer: {
    contentBase: './dist',
    inline: true
  }
})
