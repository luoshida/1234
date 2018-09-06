const Router = require('express').Router;
let swig = require('swig');
// const hmac = require('../util/crypto.js');
const router = Router();
// const userModel = require('../model/mongooseModel.js')

router.post('/login',(req,res)=>{
	var result={
		status:0,
		data:req.body
	};
	res.json(result);

	// let body = req.body;

// 	userModel
// 	.findOne({username:body.username,password:hmac(body.password)})
// 	.then((data)=>{  
// 		if (data) {
// 			req.session.userInfo = {
// 			 	_id:data._id,
// 			 	username:data.username,
// 			 	isAdmin:data.isAdmin
// 			}
// 			result.messages='登录成功';
// 			result.data=data;
// 			res.json(result);
// 		}else{
// 			result.status=10;
// 			result.messages='用户名或密码错误';
// 			res.json(result);
// 		}
// 	})
// })
// router.use((req,res,next)=>{
// 	if (req.userInfo.isAdmin) {
// 		next();
// 	}else{
// 		res.send({
// 			status:10
// 		})
// 	}
})
router.get('/logout',(req,res)=>{
	let result  = {
		status:0,// 0 代表成功 
		message:''
	}	
	// req.cookies.set('userInfo',null);
	req.session.destroy();

	res.json(result);

})




module.exports = router;