
let http = require('http');
let fs = require('fs');
let server = http.createServer((req,res) => {
//response.setHeader() 设置的响应头会与 response.writeHead() 设置的响应头合并，且 response.writeHead() 的优先。
	// res.setHeader('Content-Type', 'text/html;charset=UTF-8');
	// res.writeHead(200,{'Content-Type': 'text/plain;charset=UTF-8'});
	// res.write('床前明月光');
	// res.end('床前明月光');
	console.log(req.url);
	let dataLoad = req.url;
//输入 127.0.0.1：3000/test.html 和 127.0.0.1：3000/xxxx.html都将访问test.html
	if (dataLoad === '/test.html') {
		fs.readFile('./test.html',(err,data) => {
			if(!err){
				res.setHeader('Content-Type', 'text/html;charset=UTF-8');
				res.statusCode = 200;
				res.end(data);
			}else{
				res.statusCode = 404;
				res.end('.....');
			}
			
		})
	} else if (dataLoad === '/xxxx.html'){
		fs.readFile('./test.html',(err,data) => {
			res.setHeader('Content-Type', 'text/html;charset=UTF-8');
			res.statusCode = 200;
			res.end(data);
		})
	}else if (dataLoad === '/img/girl.jpg'){
		fs.readFile('./img/girl.jpg',(err,data) => {
			res.setHeader('Content-Type', 'image/jpg;charset=UTF-8');
			res.statusCode = 200;
			res.end(data);
		})
	} 
	else {
		res.statusCode = 404;
		res.end('.......');
	}
});
 
server.listen(3000,'127.0.0.1',() =>{
	console.log('server running in 127.0.0.1');
})