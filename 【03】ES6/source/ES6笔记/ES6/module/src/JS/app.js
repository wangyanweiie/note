//作为入口文件
//通用方式进行模块引入
import * as m1 from "./m1.js";
import * as m2 from "./m2.js";
import * as m3 from "./m3.js";

console.log(m1);
console.log(m2);
console.log(m3);

m1.teach();
m2.findJob();
m3.default.change();

//修改背景颜色为粉色
//const $ = require("jquery");
//import $ from 'jquery';
//$('body').css('background','pink');


