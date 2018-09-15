const Router = require('express').Router;
 
const router = Router();

const orderModel = require('../model/order.js');

router.use((req,res,next)=>{
	if (req.userInfo._id) {
		next();
	}else{
		res.json({
			status:10
		})
	}
})


module.exports = router;