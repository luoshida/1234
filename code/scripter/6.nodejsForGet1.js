
var http = require('http');
var fs=require('fs');
var url=require('url');
var server = http.createServer(function(req,res){
	res.setHeader("Content-Type","text/html;charset=UTF-8");
	console.log(req.url);
	var fileUrl=req.url;
	if (fileUrl=='/favicon.ico') {
		res.statusCode=404;
		res.end();
	}

	//判断参数带不带？号 带执行if内的 不带执行readfile里面的
	if (fileUrl.search(/\?/)!=-1) {
		var prams=url.parse(fileUrl,true).query;
		var parmsStr=JSON.stringify(prams);
		res.statusCode=200;
		res.end(parmsStr);
	}
	var filePath='./'+fileUrl;
	//readfile异步操作
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

