<template>
  <div>
    <h2>档案</h2>
    <p>我是档案哈哈哈</p>
    <p>{{profileTxt.name}}</p>
    <p>{{profileTxt.age}}</p>
    <p>{{profileTxt.height}}</p>
  </div>
</template>

<script>
export default {
  name: "profile",
  //显示query的信息
  computed:{
    profileTxt(){
      return this.$route.query;
    }
  },
  created(){
    console.log("Profile-Created");
  },
  destroyed(){
    console.log("Profile-Destroyed");
  }
}
</script>

<style scoped>
</style>
