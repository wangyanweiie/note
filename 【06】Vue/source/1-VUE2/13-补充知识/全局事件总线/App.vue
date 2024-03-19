<template>
  <div class="app">
    <h1>{{ message }}</h1>
    <School />
    <Student />
  </div>
</template>

<script>
// 全局事件总线$bus
/******************************************
1.作用: 组件间通信的方式, 适用于任意组件间通信;
2.main.js 中安装全局事件总线 (this 是 vue 实例 vm)
   new Vue({
   	......
   	beforeCreate() {
   		Vue.prototype.$bus = this  
   	}
   }) 
3.使用事件总线监听事件：
（1）发送事件与数据：this.$bus.$emit('xxxx',data)
（2）监听事件接收数据：A 组件想接收数据, 则在 A 组件中给 $bus 绑定自定义事件, 事件的回调留在 A 组件自身;
		如果不写事先在 methods 中定义好方法作为回调, 回调函数需要写成箭头函数的形式;
    mounted(){
      this.$bus.$on('xxxx', data=>{
				......
			})
    }
（3）注意: 最好在 beforeDestroy 钩子中, 用 this.$bus.$off 去解绑当前组件监听的事件;
**************************************************************************/
</script>
<script>
//需要在Vue脚手架中运行
import Student from "./components/Student";
import School from "./components/School";

export default {
  name: "App",
  components: { School, Student },
  data() {
    return {
      message: "你好阿！",
    };
  },
};
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>
