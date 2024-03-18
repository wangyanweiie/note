//Vuex允许我们将store分割成若干个模块,而每个模块拥有自己的state、mutations、actions、getters;
const moduleA = {
  state:{
    name: "小明"
  },
  mutations:{
    updateName(state,payload){
      state.name = payload;
    }
  },
  getters:{
    fullname(state) {
      return state.name + '哈哈'
    },
    fullname2(state, getters) {
      return getters.fullname + '嘿嘿'
    },
    //在模块中的getter可以有第三个参数:rootState 指向全局的state
    fullname3(state, getters, rootState) {
      return getters.fullname2 + rootState.counter
    }
  },
  //在模块中的context上下文包括模块的内容与根的内容,可以打印看一下;
  //在模块中的commit只调用模块中的mutations
  actions:{
    aUpdateName(context) {
      //console.log(context);
      setTimeout(() => {
        context.commit('updateName', '小黑')
      }, 1000)
    }
  }
}
export default moduleA
