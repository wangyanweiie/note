<template>
  <div>
    <h2>cpn组件的标题</h2>
    <h2>{{name}}</h2>
    <p>cpn组件的内容哈哈哈</p>
    <button>Cpn</button>
  </div>
</template>

<script>
  export default {
    name: "Cpn",
    data() {
      return {
        name: 'CPN组件的name'
      }
    }
  }
</script>

<style scoped></style>