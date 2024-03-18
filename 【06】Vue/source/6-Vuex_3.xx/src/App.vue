<template>
  <div id="app">
    <h4>APP组件</h4>
    <h5>当前数量: {{$store.state.counter}}</h5>

    <h4>moutations===========================></h4>
    <button @click="sub()">-</button>
    <button @click="add()">+</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent()">+学生</button><br>

    <h4>actions===========================></h4>
    <button @click="updateInfo()">异步更新Info</button>
    <h5>Info信息: {{$store.state.info}}</h5>

    <h4>getters===========================></h4>
    <h5>当前数量的平方: {{$store.getters.square}}</h5>
    <h5>年龄大于20的学生信息: {{$store.getters.over20}}</h5>
    <h5>年龄大于20的学生数量: {{$store.getters.over20Num}}</h5>
    <h5>年龄大于30的学生信息: {{$store.getters.overage(30)}}</h5>
    <HelloVuex></HelloVuex>

     <h4>modules===========================></h4>
     <h5>{{$store.state.a.name}}</h5>
     <h5>{{$store.getters.fullname1}}</h5>
     <h5>{{$store.getters.fullname2}}</h5>
     <h5>{{$store.getters.fullname3}}</h5>
     <button @click="updateName()">改名</button>
     <button @click="asyncUpdateName()">异步改名</button>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'
export default {
  name: 'App',
  components: {
    HelloVuex
  },
  data(){
    return {
      message:"我是APP组件"
    }
  },
  methods:{
    //************************同步操作************************
    //通过$store.commit('事件类型',payload)提交到mutations
    add(){
      this.$store.commit("increment")
    },
    sub(){
      this.$store.commit("decrement")
    },
    addCount(count){
      this.$store.commit("incrementCount",count)
    },
    /*addCount(count){
      this.$store.commit({
        type:"incrementCount",
        count:count
      })
    }*/
    addStudent(){
      const stu = { id:113,name:"alen",age:35 }
      this.$store.commit('incrementStudent',stu)
    },
    //************************异步操作************************
    //通过$store.dispatch('事件类型',payload)提交到actions
    updateInfo(){
      //this.$store.dispatch('aUpdateInfo','我是payload')
      /*this..$store.dispatch({
        type: 'aUpdateInfo',
        message: '更新成功'
      })*/
      this.$store.dispatch('aUpdateInfo','我是payload').then(res => {
        console.log('里面提交已经完成:',res);
      })
    },
    //************************更新模块中的状态************************
    //修改模块中的mutations依旧是直接使用commit直接提交修改;
    //此时会优先去全局中寻找方法,查找不到再去模块中寻找;
    updateName(){
      this.$store.commit("updateName","小白")
    },
    //修改模块异步操作
    asyncUpdateName() {
      this.$store.dispatch('aUpdateName')
    }
  }
}
</script>

<style>
  h4{
    color: purple;
  }
</style>
