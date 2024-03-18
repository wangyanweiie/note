<template>
  <div id="app">
    <h2>Hello World</h2>
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <!--动态路由显示URL后的信息:v-bind-->
    <router-link :to="'/user/'+ userId" tag="button">用户</router-link>
    <!--query方式显示URL后的信息-->
    <router-link :to="{path:'/profile', query:{name:'July',age:18,height:188}}" tag="button">档案</router-link>

    <!--通过代码的方式修改路由
    <button @click="homeClick">首页2</button>
    <button @click="aboutClick">关于2</button>
    -->
    <!--通过代码的方式传递参数: params/query
    <button @click="userClick">用户2</button>
    <button @click="profileClick">档案2</button>
    -->
    <keep-alive exclude="user">
      <router-view></router-view>
    </keep-alive>
    <!---------------------------------------------------------
     <router-link>与<router-view>是在vue-router中已经注册的组件;
     <router-view>用于渲染出的组件应该显示在页面的什么位置,占位;
     keep-alive适用于所有的组件: exclude代表除外,并且引号""之间只能用逗号分隔,不能加空格;
    ------------------------------------------------------------------------------->
  </div>
</template>

<script>
export default {
  name: 'App',
  //路由URL后显示的信息
  data(){
    return{
      userId:"皮卡皮卡July"
    }
  },
  //通过代码实现路由跳转与参数传递
  /***********************************
  methods: {
    homeClick(){
      this.$router.push('/home')
    },
    aboutClick(){
      this.$router.push('/about')
    },
    userClick(){
      this.$router.push('/user/'+ this.userId);
    },
    profileClick(){
      this.$router.push({
        path:"/profile",
        query:{name:'July',age:18}
      });
    }
  }
  ************************************/
}
</script>

<style>
.active{
  color: red;
}
</style>
