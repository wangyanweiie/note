import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

//*****************runtime compiler*****************
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

/*******************runtime-only*******************
new Vue({
  render: h => h(App),
}).$mount('#app')*/


  /**
  等同于<==>
  1.render函数直接传App组件进行渲染,替换掉挂载的app标签;(写成箭头函数)
    render: function(createElement){
      return createElement(App)
    }
  2.createElement函数语法:
    * 普通使用: createElement('标签',{标签的属性},['标签内容(嵌套)'])
    * 传入组件对象: createElement(App)

  render: h => h(App)
  3.但是此时vue文件中的template标签是由谁处理的？？
    * 由vue-template-compiler
    * App.vue文件中的template会在内部被编译成render函数,最后的运行结果中没有template;
  **/

