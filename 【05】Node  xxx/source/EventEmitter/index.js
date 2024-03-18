// 引入 events 模块
var events = require("events");

// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

// 创建事件处理程序
var connectHandler = function connected() {
  console.log("连接成功。");

  // 触发 data_received 事件
  eventEmitter.emit("data_received");
};

// 触发 connection 事件
eventEmitter.emit("connection");

// 绑定 connection 事件处理函数
eventEmitter.on("connection", connectHandler);

// 绑定 data_received 事件处理函数（匿名函数）
eventEmitter.on("data_received", function () {
  console.log("数据接收成功。");
});

console.log("程序执行完毕。");
