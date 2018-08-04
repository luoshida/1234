let express = require('express');
let swig = require('swig');

let app = express();

//设置 不用刷新服务器 就可以在页面写东西
// swig.setDefaults({
//   cache: false
// });
app.use(express.static('static'));

app.engine('html',swig.renderFile);
app.set('views','./view');
app.set('view engine','html');


app.get('/',(req,res)=>{
	res.render('index',{
		title:'pl网',
		content:"我在大括号里面内容"
	})
})
app.get('/list',(req,res)=>{
	res.render('list',{
		title:'神经',
		content:"返还房屋开发乌克兰"
	})
})

app.listen(3000, function(){
	console.log("server running in 3000");
})