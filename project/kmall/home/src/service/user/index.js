
var _util = require('util');

var _user = {
	logout: function (success,error) {
		_util.request({
			url:'/user/logout',
			success:success,
			error:error,
		})
	},
	login: function (data,success,error) {
		_util.request({
			url:'/user/login',
			data:data,
			type:'post',
			success:success,
			error:error,
		})
	},
}

module.exports = _user;