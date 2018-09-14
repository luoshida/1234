
var _util = require('util');

var _order = {
	getOrderList:function (success,error) {
		_util.request({
			url:'/order/getOrderList',
			success:success,
			error:error,
		})
	},
	getAddress:function (success,error) {
		_util.request({
			url:'/order/getAddress',
			success:success,
			error:error,
		})
	},
	addAddress:function (data,success,error) {
		_util.request({
			url:'/order/addAddress',
			type:'post',
			data:data,
			success:success,
			error:error,
		})
	},
	deleteAddress:function (data,success,error) {
		_util.request({
			url:'/order/deleteAddress',
			type:'put',
			data:data,
			success:success,
			error:error,
		})
	},
	editAddress:function (data,success,error) {
		_util.request({
			url:'/order/editAddress',
			type:'put',
			data:data,
			success:success,
			error:error,
		})
	},
	editAddressSubmit:function (data,success,error) {
		_util.request({
			url:'/order/editAddress',
			type:'post',
			data:data,
			success:success,
			error:error,
		})
	},
	createOrder:function (data,success,error) {
		_util.request({
			url:'/order/createOrder',
			type:'post',
			data:data,
			success:success,
			error:error,
		})
	},

}

module.exports = _order;