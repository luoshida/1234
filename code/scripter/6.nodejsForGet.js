//Node.js是一个Javascript运行环境(runtime environment)，
//发布于2009年5月，由Ryan Dahl开发，实质是对Chrome V8引擎进行了封装。
//Node.js对一些特殊用例进行优化，提供替代的API，使得V8在非浏览器环境下运行得更好。
//V8引擎执行Javascript的速度非常快，性能非常好。
//Node.js是一个基于Chrome JavaScript运行时建立的平台，
//用于方便地搭建响应速度快、易于扩展的网络应用。Node.js 使用事件驱动，
//非阻塞I/O 模型而得以轻量和高效，非常适合在分布式设备上运行数据密集型的实时应用。

var http = require('http');
//引入node.jsde的http模块
var fs=require('fs');    
var server = http.createServer(function(req,res){

	res.setHeader("Content-Type","text/html;charset=UTF-8");
	//支持中英文的格式

	res.setHeader("Access-Control-Allow-Origin","*");
	//允许跨域任何域名 

	// res.setHeader("Access-Control-Allow-Origin","http://127.0.0.1:3001");
	//允许跨域到http://127.0.0.1:3001

	// res.setHeader("Content-Type","text/plain");
	//纯文本模式

	// res.end('Hello World\n');

	// res.statusCode=404
	//返回一个404的错误代码

	console.log(req.url);
	//能在cmd上显示访问的文件url

	var filePath='./'+req.url;
	fs.readFile(filePath,function(err,date){
		if (err) {
			res.statusCode=404;
			res.end('file not found');
		} else {
			res.statusCode=200;
			res.end(date);
		}
	})

});
server.listen(3000,'127.0.0.1',function(){
	console.log("Server is running at http://127.0.0.1:3000");
})

