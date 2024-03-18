//静态导入
//import * as m from "./hello.js";

//获取按钮标签
const btn = document.getElementById('btn');
//绑定单击响应函数
btn.onclick = function(){
    //动态导入：import()函数,返回结果是一个Promise对象,而promise对象成功的值就是Hello模块暴露出来的对象
    import('./hello.js').then(module => {
        module.hello();
    });
}