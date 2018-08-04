let express = require('express');
let app = express();

// 没有挂载路径的中间件，应用的每个请求都会执行该中间件
app.use(function(req,res,next){
	console.log('im center');
	next();
	// next()下面的执行语句会被加载到栈内存中，当函数执行完就会执行栈里面存的命令，先进后出的原则
	console.log('im center over');
}) 

// 挂载至 '/' 的中间件，任何指向 / 的请求都会执行它
app.use('/',function(req,res,next){
	console.log('im ./ app');
	next();
	console.log('im ./ app over');
}) 

// 路由和句柄函数(中间件系统)，处理指向 '/' 的 GET 请求
app.get('/', function(req,res){
	console.log('send');
	res.send('<h1>bbb先生 你好</h1>');
});

//执行顺序
//im center
//im ./ app
//send
//im ./ app over
//im center over

let server = app.listen(3000, function(){
	
	console.log("server running in 3000");
})