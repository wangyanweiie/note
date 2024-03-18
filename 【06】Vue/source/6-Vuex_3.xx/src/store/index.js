import Vue from 'vue'
import Vuex from 'vuex'
//导入拆分的各个模块
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import moduleA from './modules/moduleA'
Vue.use(Vuex)

const state = {
  counter:100,
  info: {id: 113,name:'kobe',age:40},
  students:[
    {id: 110, name:'kobo', age:18},
    {id: 111, name:'jame', age:28},
    {id: 112, name:'curry',age:38}
  ]
}
//创建store对象
const store = new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions,
  modules:{
    a:moduleA
  }
})
//导出挂载到vue实例上
export default store
