const http =require('http');
const path =require('path');
const fs = require('fs');
// const mime = require('./json.json');
const server = http.createServer((req,res)=>{
	let fileName = req.url;
	if (fileName.lastIndexOf('.') == -1) {
		fileName = fileName + '/index.html';
	}
	let filePath =path.normalize(__dirname+'/my/'+fileName);
	// let fileExtName = path.extname(filePath);
	// console.log(fileExtName);
	fs.readFile(filePath,(err,data)=>{
		if (!err) {
			// let mimeType = mime[fileExtName] || 'text/plain';
			res.setHeader('Content-Type', 'text/html;charset=UTF-8');
			// res.setHeader('Content-Type', mimeType+';charset=UTF-8');
			res.end(data)
		}else{
			res.setHeader('Content-Type', 'text/html;charset=UTF-8');
			res.statusCode=404;
			res.end('..........');
		}
	})

})
server.listen(3000,'127.0.0.1',()=>{
	console.log('running')
})