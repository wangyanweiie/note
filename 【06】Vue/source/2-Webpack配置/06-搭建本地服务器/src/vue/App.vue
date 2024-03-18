<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <h2>{{name}}</h2>
    <button @click="btnClick">App</button>
    <!-- 使用Cpn的组件标签 -->
    <Cpn/>
  </div>
</template>

<script>
  //导入Cpn.vue
  import Cpn from './Cpn'
  export default {
    name: "App",
    //注册Cpn组件
    components: {
      Cpn
    },
    data() {
      return {
        message: 'Hello Webpack',
        name: 'coderwhy'
      }
    },
    methods: {
      btnClick() {
      alert("App！")
      }
    }
  }
</script>

<style scoped>
  .title {
    color: green;
  }
</style>