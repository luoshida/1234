// let http = require('http');
// let fs = require('fs');
// let url = require('url');

// let server = http.createServer((req,res) => {
// 	let parms = url.parse(req.url,true);
// 	console.log(parms); 
// 	let parmsStr = parms.query;
// 	console.log(parmsStr);

// })
// server.listen(3000,'127.0.0.1',() => {
// 	console.log('server runing in 127.0.0.1')
// })


// let http = require('http');
// let queryString = require('querystring');
// let server = http.createServer((req,res) => {
// 	if (req.method.toUpperCase() == 'POST') {
// 		let body = '';
// 		req.on('data',(chunk) => {
// 			body += chunk;
// 		});
// 		req.on('end',() => {

// 			console.log(queryString.parse(body));
// 		})
// 	}
// })
// server.listen(3000,'127.0.0.1',() => {
// 	console.log('server runing in 127.0.0.1')
// })

var formidable = require('formidable'),
    http = require('http'),
    util = require('util'),
    path = require('path'),
    fs = require('fs');

let server = http.createServer(function(req, res) {
  if (req.method.toLowerCase() == 'post') {
    // parse a file upload
    var form = new formidable.IncomingForm();

//uploadDir 存储的路径
    form.uploadDir = ("./img");

//keepExtensions 自动换为原来上传的格式
    form.keepExtensions = true;

    form.parse(req, function(err, fields, files) {
      res.writeHead(200, {'content-type': 'text/plain;charset=UTF-8'});
      
      let oldPath = './'+files.image.path;
      let extname = path.extname(oldPath);
      let newPath = './img/'+(new Date()).getDate()+Math.random()+extname;
      fs.rename(oldPath,newPath,()=>{});
   
      res.end(util.inspect({fields: fields, files: files}));
    });

    return;
  }

});
server.listen(3000,'127.0.0.1',() => {
	console.log('server runing in 127.0.0.1')
})