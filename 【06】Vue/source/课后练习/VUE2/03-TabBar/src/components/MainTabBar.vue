<template>
  <tab-bar>
    <!--路径使用别名,父传子当需要传入的就是字符串时不需要加: ,需要传入变量时要动态绑定 -->
    <tab-bar-item path="/home" activeColor="green">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>

    <tab-bar-item path="/category" activeColor="blue">
      <img slot="item-icon" src="../assets/img/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="../assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>

    <tab-bar-item path="/cart" activeColor="purple">
      <img slot="item-icon" src="../assets/img/tabbar/shopcart.svg" alt="">
      <img slot="item-icon-active" src="../assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>

    <tab-bar-item path="/profile">
      <img slot="item-icon" src="../assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="../assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
//导入子组件
import TabBar from "./tabbar/TabBar"
import TabBarItem from "./tabbar/TabBarItem"

export default {
  name: "MainTabBar",
  components:{
    //注册子组件
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
