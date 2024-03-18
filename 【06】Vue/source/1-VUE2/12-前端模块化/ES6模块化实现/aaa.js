var name = '小明'
var age = 18
var flag = true

function sum(num1, num2) {
  return num1 + num2
}

if (flag) {
  console.log(sum(20, 30));
}

//导出方式1:统一导出
export { flag, sum }

//导出方式2:直接加在变量声明前
export var num = 1000;
export var height = 1.88

//导出函数/类
export function mul(num1, num2) {
  return num1 * num2
}
export class Person {
  run() {
    console.log('在奔跑');
  }
}
//导出功能让导入者自己命名
export default function (argument) {
  console.log(argument);
}