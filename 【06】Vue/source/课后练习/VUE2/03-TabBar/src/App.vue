<template>
  <div id="app">
    <!-- 路由占位符 -->
    <router-view></router-view>
    <MainTabBar></MainTabBar>
  </div>
</template>

<script>
//导入子组件
import MainTabBar from "./components/MainTabBar";

export default {
  name: 'App',
  //注册子组件
  components:{
    MainTabBar
  }
}
</script>

<style>
  @import url("../src/assets/css/base.css");
</style>
