<template>
<div>
  <h2>首页</h2>
  <p>我是首页哈哈哈哈</p>
  <router-link to="/home/news" tag="button">新闻</router-link>
  <router-link to="/home/message" tag="button">消息</router-link>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: "home",
  data(){
    return{
      //存放home-news的路径
      path:"/home/news"
    }
  },
  //可以看到只被创建了一次且没有销毁;
  created(){
    console.log("Home-Created");
    //document.title="首页"
  },
  destroyed(){
    console.log("Home-Destroyed");
  },
  /*需求: 保留上一次路由的状态
  * activated 组件活跃时回调:进入home直接默认显示news
  * beforeRouteLeave记录首页离开前的路径赋值给data中的path*/
  activated(){
    this.$router.push(this.path)
  },
  //组件内导航守卫
  beforeRouteLeave (to, from, next) {
    this.path = this.$route.path;
    next()
  }


}
</script>

<style scoped>
</style>
