let express = require('express');
let app = express();


let bodyParser = require('body-parser');
//处理post请求获取的data数据跟req.on('data')一样
//处理传输对象的情况
app.use(bodyParser.urlencoded({ extended: false }))
// 处理传输字符串的情况
app.use(bodyParser.json())


// 当输入127.0.0.1的时候，默认会请求public文件夹下的index.html 相当于app.get('/public/index.html',fn)
//此文件夹下没有index.html的时候会请求此文件夹下你要输入的文件
app.use(express.static('public'));
//访问静态资源文件时，express.static 中间件会根据目录添加的顺序查找所需的文件
app.use(express.static('xxx'));

//虚拟静态资源 输入/static 相当于访问/public里面的文件
// app.use('/static',express.static('public'));


//route模式 请求的js都是以app.use('/user'前缀开始
app.use('/user',require('./router/user.js'));
app.use('/blog',require('./router/blog.js'));

app.get('/test/bbb.html', function(req,res){
	res.send('oooo');
});
app.post('/abcd', function(req,res){
	// var body = '';
	// req.on('data',function(chunk){
	// 	body += chunk;
	// })
	// req.on('end',function(){
	// 	// var bodyObj = querystring.parse(body);
	// 	console.log(body);
	// })
	res.send(req.body);
});
let server = app.listen(3000, function(){
	
	console.log("server running in 3000");
})