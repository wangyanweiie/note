import Vue from 'vue'
//方法: 回调函数参数(state,payload)
const mutations = {
  increment(state){
    state.counter++
  },
  decrement(state){
    state.counter--
  },
  incrementCount(state,count){
    state.counter += count;
  },
  /*incrementCount(state,payload){
    state.counter += payload.count;
  },*/
  incrementStudent(state,stu){
    state.students.push(stu);
  },
  //响应式规则
  updateInfo(state){
    //state.info.name = "July"              //修改state中已有属性: 响应式
    //state.info["address"] = "洛杉矶"      //直接新增属性: 不能响应式
    //delete state.info.age                 //直接删除属性: 不能响应式
    Vue.delete(state.info,"age")            //Vue.delete方法删除属性: 响应式
    Vue.set(state.info,"address","洛杉矶")  //Vue.set方法新增属性: 响应式
  }
}
export default mutations
