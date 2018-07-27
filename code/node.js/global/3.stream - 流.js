// process.stdout.write('aaa');

//可写流
// const {Writable} = require('stream');

// class MyWritable extends Writable{
// 	constructor(){
// 		super();
// 	}
// 	_write(chunk,encoding,callback){
// 		console.log(chunk.toString());
// 		callback();
// 	}
// }
// const write = new MyWritable();

// write.write('aa','utf8',()=>{
// 	console.log('nihao')
// })
// write.on('finish',()=>{
// 	console.log('finally')
// })
// write.end();

//管道 把（write）的内容传到process.stdin
//process.stdin.pipe(write);

//可读流
const {Readable} = require('stream');

class MyReadable extends Readable{
	constructor(){
		super();
		this.index=0;
	}
	_read(){
		this.index++;
		if (this.index > 5) {
			this.push(null);
		} else {
			var str = '' + this.index;
			var data = Buffer.from(str);
			this.push(data);
		}
	}
}
let fs = new MyReadable();

var body = '';
fs.on('data', (chunk) => {
	body += chunk;
})
fs.on('end', () => {
	console.log(body)
})