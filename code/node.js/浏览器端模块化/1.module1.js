

var mo=require('./1.module.js')
//接收到的module.exports这个对象
//require请求的 返回值上面是一个含有请求地址上的exports上面的属性和方法的对象

console.log(mo);

console.log(mo.obj);

console.log(mo.str);

console.log(mo.obj2);