
// buffer 存放二进制数据的容器 相当于一个数组

//Buffer.from('string',语言 默认utf-8)
let n1 = Buffer.from('hello');
let n2 = Buffer.from('你好');

//Buffer.alloc(size,fill,语言默认utf-8)
//size 长度
let n3 = Buffer.alloc(10);
let n4 = Buffer.alloc(10,'你好');
let n5 = Buffer.alloc(12,'你好');

console.log(n1[0]);//十进制  104
console.log(n1[1]);//101
console.log(n1);//十六进制 <Buffer 68 65 6c 6c 6f>
console.log(n2);//<Buffer e4 bd a0 e5 a5 bd>
console.log(n2.toString());// 你好
console.log(n3);//<Buffer 00 00 00 00 00 00 00 00 00 00>
console.log(n4);//<Buffer e4 bd a0 e5 a5 bd e4 bd a0 e5>
console.log(n5);//<Buffer e4 bd a0 e5 a5 bd e4 bd a0 e5 a5 bd>

//两个16进制的数=1B字节
//0或1占 1bit位
//8bit=1B
//一个汉字=3B
//16进制 00 - ff  10进制 0-255  2进制 00000000-11111111
