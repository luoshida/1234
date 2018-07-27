

// var a = require('C:/Users/liyuphp/123/code/node.js/浏览器端模块化/1.test.js');
// var a = require('./1.test.js');
var a = require('./1.test');
//不写文件名后缀 会先找 .js 再找 .json 再找 .node
// console.log(arguments);
console.log(arguments.callee+'');
function (exports, require, module, __filename, __dirname) {
}

//+''转字符串
//arguments能在控制台中打印 说明.js是一个
//function (exports, require, module, __filename, __dirname){}函数

console.log(a);
