const fs = require('fs');


//createWriteStream
// const ws=fs.createWriteStream('./test2.txt');
// ws.write('asdfghjk');
// ws.write('uuuuuuu');
// ws.on('finish',()=>{
// 	console.log('finally');
// });
// ws.end();


//createReadStream
let body ='';
const rs=fs.createReadStream('./test2.txt');
rs.on('data',(chunk)=>{
	body += chunk;
})
rs.on('end',()=>{
	console.log(body)
})


rs.pipe(ws);