const Router = require('express').Router;

const router = Router();

// router.all('',function(req,res){
	
// })
router.get('/', function(req,res){
	res.send('<h1>blog先生 你好</h1>');
});
router.get('/bbb', function(req,res){
	res.send('<h1>blog2先生 你好</h1>');
});
router.get('/ddd.html', function(req,res){
	res.send('<h1>blog3先生 你好</h1>');
});

module.exports = router;