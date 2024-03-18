//导入axios模块
import axios from 'axios'
/********************模块封装*********************
//方式1: 通过添加两个回调函数作为参数返回对应产生的结果
//-------------------------------------------------
//文件只能有一个default,有多个函数需要导出时不适用;
export function request1(config, success, failure) {
  //创建axios的实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })
  //发送网络请求:将产生的结果传回调用的地方
  instance(config).then(res => {
      success(res);
    }).catch(err => {
      failure(err)
    })
}
//方式2: 传入config对象,对象中有参数配置以及success与failure方法
//--------------------------------------------------
export function request2(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })
  instance(config.baseConfig)
    .then(res => {
      config.success(res);
    })
    .catch(err => {
      config.failure(err)
    })
}
//方式3: 外部封装promise整体返回
//--------------------------------------------------
export function request3(config) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: 'http://152.136.185.210:7878/api/m5',
      timeout: 5000
    })
    instance(config)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}
*/
//方式4: return,因为调用instance()本身返回的就一个Promise对象
//--------------------------------------------------
export function request4(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })
  //instance本身的返回值就是Promise对象
  return instance(config)
}

//******************封装+拦截器***********************/
export function request5(config) {
  //1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })

  //2.拦截器: 请求拦截与响应拦截(config是需要传入的参数)
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })
  instance.interceptors.response.use(res => {
    return res.data;
  }, err => {
    console.log(err.message); //失败的信息
  })

  //3.发送真正的网络请求
  return instance(config)
}
