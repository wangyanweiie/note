function add(num1, num2) {
  return num1 + num2
}

function mul(num1, num2) {
  return num1 * num2
}
//CommonJs方式暴露变量
module.exports = {
  add,
  mul
}
