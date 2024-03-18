//计算属性:回调函数参数(state,getters)
const getters = {
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
}
export default getters
