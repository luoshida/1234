const Router = require('express').Router;
let swig = require('swig');
const hmac = require('../util/crypto.js');
const router = Router();
const wishModel = require('../model/mongooseModel.js')

router.post('/register',(req,res)=>{
	var result={
		status:0,
		message:''
	}; 
	// console.log(req.body,';;;;');
	let body = req.body;
	wishModel.find({username:body.username},(err,data)=>{
		var result={
			status:0,
			message:''
		};
		// console.log(data);
		if (!err) {
			if (data[0]) {
				result.status=10;
				result.message='用户名已存在';
				res.json(result);
			}else{
				new wishModel({
					username:body.username,
					password:hmac(body.password)
				}).save((err,doc)=>{
					if (!err) {
						result.message='注册成功';
						res.json(result);
					} else{
						res.end('save data error..',err)
					}
				})
			}
		}
		
	});
})




module.exports = router;