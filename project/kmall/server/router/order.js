const Router = require('express').Router;
 
const router = Router();
const userModel = require('../model/user.js');
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

router.get('/getOrderList',(req,res)=>{
	userModel.findById(req.userInfo._id)
	.then(user=>{
		user.getOrderCartList()
		.then(cart=>{
			res.json({
				status:0,
				data:cart
			})
		})	
	})
	.catch(e=>{
		res.json({
			status:1,
			messages:'获取订单商品失败'
		})
	})
})
router.get('/getAddress',(req,res)=>{
	userModel.findById(req.userInfo._id)
	.then(user=>{
		res.json({
			status:0,
			data:user.addressList
		})
	})
	.catch(e=>{
		res.json({
			status:1,
			messages:'添加地址失败'
		})
	})

})
router.post('/addAddress',(req,res)=>{
	userModel.findById(req.userInfo._id)
	.then(user=>{
		if (user.addressList.length) {
			user.addressList.push(req.body)
		}else{
			user.addressList=[req.body]
		}
		user.save()
		.then(newUser=>{
			res.json({
				status:0,
				data:user.addressList
			})
		})
	})
	.catch(e=>{
		res.json({
			status:1,
			messages:'添加地址失败'
		})
	})

})
router.put('/deleteAddress',(req,res)=>{
	userModel.findById(req.userInfo._id)
	.then(user=>{
		user.addressList.id(req.body.addressId).remove();
		user.save()
		.then(newUser=>{
			res.json({
				status:0,
				data:user.addressList
			})
		})
	})
	.catch(e=>{
		res.json({
			status:1,
			messages:'删除地址失败'
		})
	})
})
router.put('/editAddress',(req,res)=>{
	userModel.findById(req.userInfo._id)
	.then(user=>{
		res.json({
			status:0,
			data:user.addressList.id(req.body.addressId)
		})
	})
	.catch(e=>{
		res.json({
			status:1,
			messages:'删除地址失败'
		})
	})
})
router.post('/editAddress',(req,res)=>{
	userModel.findById(req.userInfo._id)
	.then(user=>{
		var item=user.addressList.id(req.body.addressId);
		item.name=req.body.name;
		item.address=req.body.address;
		item.province=req.body.province;
		item.city=req.body.city;
		item.phone=req.body.phone;
		item.zip=req.body.zip;
		user.save()
		.then(newUser=>{
			res.json({
				status:0,
				data:user.addressList
			})
		})
		
	})
	.catch(e=>{
		res.json({
			status:1,
			messages:'删除地址失败'
		})
	})

})


router.post('/createOrder',(req,res)=>{
	userModel.findById(req.userInfo._id)
	.then(user=>{
		let order={};
		user.getOrderCartList()
		.then(result=>{
			order.payment=result.allPrice;
			let productList=[];
			result.cartList.forEach(item=>{
				productList.push({
					productId:item.product._id,
					number:item.number,
					allPrice:item.allPrice,
					price:item.product.price,
					loadImg:item.product.loadImg,
					name:item.product.name
				})
			})
			order.productList=productList;
			let address=user.addressList.id(req.body.addressId);
			order.address={
				addressId:address._id,
				address:address.address,
				province:address.province,
				city:address.city,
				name:address.name,
				phone:address.phone,
				zip:address.zip,
			}
			order.orderNo=Date.now().toString()+parseInt(Math.random()*10000);
			order.user=user._id;
			new orderModel(order)
			.save()
			.then(newOrder=>{
				res.json({
					status:0,
					data:newOrder
				})
			})
		})
	})
})

module.exports = router;