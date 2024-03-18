module.exports = {
  //设置入口文件
  pages: {
    index: {
      entry: 'src/main.js' 
    }
  },
  //开启代理服务器(需要重新运行)
  /*************方式一**************
  //1.不能配置多个代理,不能灵活的控制请求是否走代理;
  //2.即当代理服务器本身(public文件夹)就存在请求的数据时,不会再像5000服务器发送请求;
  devServer:{
    proxy: 'http://localhost:5000'
  }*/
  //*************方式二**************
  devServer: {
    proxy: {
      '/July': {              //请求前缀:含有当前请求前缀的请求会直接被转发到服务器请求,本地有不再影响;
        target: 'http://localhost:5000',
				pathRewrite:{'^/July':''},    //通过正则匹配重写路径: 在5000服务器收到的请求去掉请求前缀,不然找不到的符合的路径;
        ws: true,           //vue中默认为true,用于支持websocket ?
        changeOrigin: true  //vue中默认为true,用于控制请求头中的host值: 5000/8080
      },
      '/demo': {
        target: 'http://localhost:5001',
				pathRewrite:{'^/demo':''},
        //ws: true,
        //changeOrigin: true
      }
    }
  }
}
