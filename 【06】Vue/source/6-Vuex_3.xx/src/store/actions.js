//只进行异步操作: 回调函数参数(context,payload)
const actions = {
  /*aUpdateInfo(context,payload) {
    setTimeout(() => {
      context.commit('updateInfo')
      console.log(payload.message);
    }, 1000)
  }*/
  //Promise可以在成功执行后返回执行成功的通知,方便继续下一步处理;
  //aUpdateInfo返回的Promise对象,谁通过dispatch调用谁接收到;
  aUpdateInfo(context, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('updateInfo');
        resolve('执行成功!!')
      }, 1000)
    })
  }
}
export default actions
