import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//声明模块对应的对象
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
    fullname1(state) {
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
  //在模块中的context上下文包括模块的内容与根的内容
  //在模块中的commit只提交到模块中的mutations
  actions:{
    aUpdateName(context) {
      //console.log(context);
      setTimeout(() => {
        context.commit('updateName', '小黑')
      },1000)
    }
  }
}

//创建store对象
const store = new Vuex.Store({
  //变量状态:存放需要的数据
  state:{
    counter:100,
    info: {id: 113, name:'kobe',age:40},
    students:[
      {id: 110, name:'kobo', age:18},
      {id: 111, name:'jame', age:28},
      {id: 112, name:'curry',age:38}
    ]
  },
  //方法: 回调函数参数(state,payload)
  mutations:{
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    incrementCount(state,count){
      state.counter += count;
    },
    incrementStudent(state,stu){
      state.students.push(stu);
    },
    //响应式规则验证
    updateInfo(state){
      //state.info.name = "July"               //更新state中已有属性: 响应式
      //state.info["address"] = "洛杉矶"       //直接新增属性: 不能响应式
      //delete state.info.age                  //直接删除属性: 不能响应式
      Vue.set(state.info,"address","洛杉矶")   //Vue.set方法新增属性: 响应式
      Vue.delete(state.info,"age")            //Vue.delete方法删除属性: 响应式
    }
  },
  //计算属性:回调函数参数(state,getters)
  getters:{
    square(state){
      return state.counter * state.counter
    },
    over20(state){
      return state.students.filter(value => value.age > 20)
    },
    over20Num(state,getters){
      return getters.over20.length
    },
    overage(state){
      return function(age){
        return state.students.filter(value => value.age > age)
      }
    }
  },
  //只进行异步操作: 回调函数参数(context,payload)
  actions:{
    /*aUpdateInfo(context,payload) {
      setTimeout(() => {
        context.commit('updateInfo')
      }, 1000)
    }*/
    aUpdateInfo(context, payload) {
      //Promise可以在成功执行后返回执行成功的通知,方便继续下一步处理;
      //aUpdateInfo返回的Promise对象,谁通过dispatch调用谁接收到;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo');
          resolve('成功执行!!')
        }, 1000)
      })
    }
  },
  modules:{
    a:moduleA
  }
})
//导出
export default store
