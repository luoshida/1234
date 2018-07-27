const fs = require('fs');

//sync同步 write
// let fd = fs.openSync('./test1.txt','w');

// console.log(fd);

// fs.writeSync(fd,'aae545e');

// fs.closeSync(fd);

//asyn 异步 write
// fs.open('./test.txt','w',(err,fd)=>{
// 	if (!err) {
		
// 		fs.write(fd,'666666666666666',(err)=>{
// 			if (!err) {
// 				fs.close(fd,(err)=>{
// 					if (!err) {
// 						console.log('close correct ::')
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

//同步writeFileSync
//fs.writeFileSync(file, data[, options])
// fs.writeFileSync('./test.txt','aaaaaaa',{flag:'a'});

//异步writeFile
fs.writeFile(file, data[, options], callback);
fs.writeFile('./test.txt','9999999',{flag:'w'},(err)=>{
	if (!err) {
		console.log('file corrent write:',err);
	} else {
		console.log('file error write:',err);
	}
})