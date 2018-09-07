const Router = require('express').Router;
let swig = require('swig');
const hmac = require('../util/crypto.js');
const router = Router();
const userModel = require('../model/user.js')

router.post('/login',(req,res)=>{
	let body = req.body;
	// console.log(body);
	userModel
	.findOne({username:body.username,password:hmac(body.password),isAdmin:false})
	.then((data)=>{  
		if (data) {
			req.session.userInfo = {
			 	_id:data._id,
			 	username:data.username,
			 	isAdmin:data.isAdmin
			}
			res.json({
				status:0,
				messages:'登录成功',
				data:data
			});
		}else{
			res.json({
				status:1,
				messages:'用户名或密码错误',
			});
		}
	})
})
router.get('/userInfo',(req,res)=>{
	if (req.userInfo._id) {
		res.json({
			status:0,
			data:req.userInfo
		})
	}else{
		res.json({
			status:1
		})
	}
})
router.post('/register',(req,res)=>{
	var body=req.body;
	userModel
	.findOne({username:body.username})
	.then((data)=>{  
		if (data) {
			res.json({
				messages:'该账号已被注册',
				status:1
			});
		}else{
			new userModel({
				username:body.username,
				password:hmac(body.password),
				phone:body.phone,
				email:body.email,
			})
			.save((err,result)=>{
				if (!err) {
					res.json({
						status:0,
						data:result
					})
				}else{
					res.json({
						messages:'注册失败',
						status:1
					});
				}
			})
		}
	})

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
router.get('/blur',(req,res)=>{
	userModel
	.findOne({username:req.query.username})
	.then((data)=>{  
		if (data) {
			res.json({
				data:{
					messages:'该账号已被注册'
				},
				status:0
			});
		}else{
			res.json({
				status:1,
				messages:'该账号可用'
			});
		}
	})

})




module.exports = router;