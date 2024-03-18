const path = require('path')

module.exports = {
  //设置对应的入口路径与出口路径
  entry: './src/main.js',
  output: {
    /**
      * 出口是对象类型: 路径+文件名
      * 通过导入path模块动态获取导出路径,path.resolve()可以对两个路径进行拼接;
      * __dirname是node上下文的全局对象,即当前文件所在的绝对路径地址;
    * */
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    //设置默认url打包的拼接路径,加载时直接加载dist文件夹中的资源;
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        /**
          * css-loader: 加载 CSS文件并解析import的CSS文件
          * style-loader: 把模块导出的内容作为样式并添加到DOM中
          * 注意: 当使用多个loader时是按照从右向左的顺序进行读取的
        * */
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader", 
        }, {
          loader: "css-loader",
        }, {
          loader: "less-loader",
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //当加载的图片小于limit时,会将图片编译成base64字符串形式.
              //当加载的图片大于limit时,需要使用file-loader模块进行加载.
              limit: 13000,
              //打包图片的命名规则:ext是扩展名
              name: 'img/[name].[hash:8].[ext]'
            },
          }
        ]
      },
      {
        test: /\.js$/,
        //ES6转化ES5: node_modules文件夹不需要进行转化
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      //vue-loader配置
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  //********设置查找的vue的版本路径********
  resolve: {
    //设置可以省略的后缀类型
    extensions: ['.js', '.css', '.vue'],
    //alias别名:按照指定的文件路径去寻找
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
}