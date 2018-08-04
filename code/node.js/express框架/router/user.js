const Router = require('express').Router;

const router = Router();

// router.all('',function(req,res){
	
// })
router.get('/', function(req,res){
	res.send('<h1>user先生 你好</h1>');
});

// router.get('/user', function(req,res,next){
// 	console.log('大王叫我来巡山')
// 	next();
// },function(){
// 	res.send('<h1>先生 你好</h1>');
// });

// router.post('/user', function(req,res){
// 	res.send('<h1>先生 你坏</h1>');
// });

// router.put('/user', function(req,res){
// 	res.send('<h1>女士 你好</h1>');
// });

// router.delete('/user/ :id', function(req,res){
// 	//把请求数据的最后项改为对象 {id:xxx}
// 	console.log(req.params);
// 	res.send('<h1>女士 你坏</h1>');
// });

module.exports = router;