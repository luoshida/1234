

const http = require('http');
const path = require('path');
const fs = require('fs');
const mime = require('./mime.json');
const url = require('url');

const queryString = require('querystring');
const swig = require('swig');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/lsd', { useNewUrlParser: true });
let db = mongoose.connection;
db.on('error',(err)=>{
	throw err;
});
db.once('open',()=>{
	console.log('connect ok ing...')
});

const server = http.createServer((req,res)=>{

	let pathname = url.parse(req.url,true).pathname;

	if (pathname.startsWith('/static/')) {
		let filePath = path.normalize(__dirname + pathname);
		let fileExtName = path.extname(filePath);

		fs.readFile(filePath,(err,data)=>{
			if(!err){
				let mimeType = mime[fileExtName] || 'text/plain';
				res.setHeader('Content-Type', mimeType+';charset=UTF-8');
				res.end(data);
			}else{
				res.setHeader('Content-Type', 'text/html;charset=UTF-8');
				res.statusCode = 404;
				res.end('<h1>页面走丢了1。。。。</h1>')
			}
		});
	}else{
		let pathStr = pathname.split('/');
		let controller = pathStr[1] || 'wish';
		let action = pathStr[2] || 'index';
		let args = pathStr.slice(3);
		let model;
		try {
			model = require('./controller/'+controller);
		}catch(err){
			res.setHeader('Content-Type', 'text/html;charset=UTF-8');
			res.statusCode = 404;
			res.end('<h1>页面走丢了2。。。。</h1>');
			return;
		}

		if(model[action]){
			model[action].apply(null,[req,res].concat(args));
		}
	}
	
});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running on 127.0.0.1:3000');
})