<template>
  <div>
    <h2>用户</h2>
    <p>我是用户嘿嘿嘿</p>
    <p>{{userId}}</p>
    <p>{{$route.params.id}}</p>
    <button @click="btnClick">点击</button>
  </div>
</template>

<script>
export default {
  name: "user",
  //获取URL后显示的信息
  computed:{
    userId(){
      //$route是当前正在活跃的路由映射关系,params代表参数,id要与index文件中配置时保持一致;
      return this.$route.params.id;
    }
  },
  methods:{
    btnClick(){
      //所有的组件都继承自vue的原型
      console.log(this.$router)
      console.log(this.$route)
    }
  },
  created(){
    console.log("User-Created");
  },
  destroyed(){
    console.log("User-Destroyed");
  }
}
</script>

<style scoped>

</style>
