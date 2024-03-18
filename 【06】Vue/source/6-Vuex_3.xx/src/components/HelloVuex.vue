<template>
  <div class="hello">
    <h4>HelloVuex组件===========================></h4>
    <h5>当前数量: {{$store.state.counter}}</h5>
    <h5>当前数量的平方: {{$store.getters.square}}</h5>
    <h5>年龄大于20的学生信息: {{$store.getters.over20}}</h5>
    <h5>年龄大于20的学生数量: {{$store.getters.over20Num}}</h5>
    <h5>年龄大于30的学生信息: {{$store.getters.overage(30)}}</h5>
  </div>
</template>

<script>
export default {
  name: 'HelloVuex',
}
</script>

<style scoped>
  h4{
    color: purple;
  }
</style>
