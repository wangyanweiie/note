/*********************************
缺陷:模板代码与Js代码没有进行分离
优化: 进一步创建vue文件进行代码分离
**********************************/
export default {
  template:  `
  <div>
    <h2>{{message}}</h2>
    <button @click="btnClick">按钮</button>
    <h2>{{name}}</h2>
  </div>`,
  data() {
    return {
      message: 'Hello Webpack',
      name: 'coderwhy'
    }
  },
  methods: {
    btnClick(){
      alert("App！")
    }
  }
}