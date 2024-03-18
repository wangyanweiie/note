//1. 引入express
const express = require('express');
//2. 创建应用对象
const app = express();
//3. 创建路由规则(request是对请求报文的封装, response是对响应报文的封装)

//********************* GET响应 **********************
app.get('/server', (request, response) => {
    //设置响应头固定写法,允许跨域, *通配所有的网页都可以
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体：send方法只能接收字符串或者buffer类型的数据
    response.send('HELLO AJAX GET');
});

//********************* POST响应 ***********************
//app.post('/server', (request, response) => {
//all 可以接收任意类型的请求:GET/POST/OPTION..
app.all('/server', (request, response) => {
    //设置预定义响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //接收自定义请求头时,需要加特殊的响应头 Headers
    response.setHeader('Access-Control-Allow-Headers', '*');
    //设置响应体
    response.send('HELLO AJAX POST');
});

//********************* JSON响应 ************************
app.all('/json-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    //响应一个数据
    const data = {
        name: '尚硅谷'
    };
    //需要将要返回的data对象转换成JSON字符串再放入send中
    let str = JSON.stringify(data);
    //设置响应体: send只能发送字符串类型
    response.send(str);
});

//********************* IE缓存问题 ************************
app.get('/ie', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    response.send('HELLO IE');
});

//*********************** 延时响应 **************************
app.all('/delay', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    setTimeout(() => {
        //设置响应体
        response.send('延时响应');
    }, 3000)
});

//********************** JQuery服务 ************************
app.all('/jquery-server', (request, response) => {
    //设置响应头（预定义与自定义） 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // response.send('Hello jQuery AJAX');
    const data = {name:'尚硅谷'};
    response.send(JSON.stringify(data));
});

//*********************** axios服务 *************************
app.all('/axios-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // response.send('Hello jQuery AJAX');
    const data = {name:'尚硅谷'};
    response.send(JSON.stringify(data));
});

//*********************** fetch服务 *************************
app.all('/fetch-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // response.send('Hello jQuery AJAX');
    const data = {name:'尚硅谷'};
    response.send(JSON.stringify(data));
});

//************************ JSONP服务 **************************
app.all('/jsonp-server',(request, response) => {
    //response.send('console.log("hello jsonp")');
    const data = {
        name: '尚硅谷agg'
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    /*返回结果的形式是一个函数调用,调用函数的参数就是想给客户端返回的结果数据;
    该函数必须提前声明,否则会报错;*/
    //``中的字符串可以使用${}拼串
    response.end(`handle(${str})`);
});

//******************** 用户名检测是否存在 ************************
app.all('/check-username',(request, response) => {
    //response.send('console.log("hello jsonp")');
    const data = {
        exist: 1,
        msg: '用户名已经存在'
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //返回结果
    response.end(`handle(${str})`);
});

//************************* jquery-jsonp *************************
app.all('/jquery-jsonp-server',(request, response) => {
    //response.send('console.log("hello jsonp")');
    const data = {
        name:'尚硅谷',
        city: ['北京','上海','深圳']
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //接收callback参数
    let cb = request.query.callback;
    //返回结果
    response.end(`${cb}(${str})`);
});

//****************************** CORS *******************************
app.all('/cors-server', (request, response)=>{
    //设置响应头
    //response.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    response.setHeader("Access-Control-Allow-Origin", "*");     //设置预检请求或实际请求的源站
    response.setHeader("Access-Control-Allow-Headers", '*');    //暴露头部信息
    response.setHeader("Access-Control-Allow-Method", '*');     //设置请求允许的方法
    response.send('hello CORS');
});

//4. 监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动, 8000 端口监听中....");
});