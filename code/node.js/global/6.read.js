const fs = require('fs');

//同步read
// let fd = fs.openSync('./test.txt','r');

// let buf = Buffer.alloc(10)

// fs.readSync(fd,buf,0,10,0);

// console.log(buf);

//异步read
// fs.open('./test.txt','r',(err,fd)=>{
// 	if (!err) {
// 		let buf = Buffer.alloc(10);
// 		fs.read(fd,buf,0,10,0,(err)=>{
// 			if (!err) {
// 				fs.close(fd,(err)=>{
// 					if (!err) {
// 						console.log('close correct ::',buf)
// 					} else {
// 						console.log('close err ::')
// 					}
// 				})
// 			}
// 		})
// 	} else {
// 		console.log('failed::')
// 	}
// });

//同步readFileSync
//fs.readFileSync(path[, options]);
// fs.readFileSync('./test.txt');

// console.log(fs.readFileSync('./test.txt'));

//异步readFile
//fs.readFile(path[, options], callback)
fs.readFile('./test.txt',(err,data)=>{
	if (!err) {
		console.log(data);
	} else {
		console.log('file not found');
	}
})