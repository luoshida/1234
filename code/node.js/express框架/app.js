let express = require('express');
let app = express();

//默认会请求public文件夹下的index.html，所以写到下面
app.use(express.static('public'));

// app.all('',function(req,res){
	
// })
app.get('/ab?cd', function(req,res){
	res.send('<h1>先生 你好</h1>');
});

// app.get('/', function(req,res,next){
// 	console.log('大王叫我来巡山')
// 	next();
// },function(){
// 	res.send('<h1>先生 你好</h1>');
// });

// app.post('/rrr', function(req,res){
// 	res.send('<h1>先生 你坏</h1>');
// });

// app.put('/', function(req,res){
// 	res.send('<h1>女士 你好</h1>');
// });

// app.delete('/', function(req,res){
// 	res.send('<h1>女士 你坏</h1>');
// });



let server = app.listen(3000, function(){
	
	console.log("server running in 3000");
})