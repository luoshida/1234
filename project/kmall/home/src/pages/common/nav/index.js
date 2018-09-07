require('./index.css');
var _user = require('service/user');
var _util = require('util');

var nav={
	init:function(){
		this.bindEvent();
		this.loadUserInfo();
		this.loadCartInfo();
		return this;
	},
	bindEvent:function(){
		$('#logout').on('click',function(){
			_user.logout(function(result){
				window.location.reload();
			},function(message){
				_util.showErrorMsg(message);
			})
		})
	},
	loadUserInfo:function(){
		_user.getUserInfo(function(userInfo){
			$('.user-load').hide();
			$('.user-loaded').show().find('.username')
			.text(userInfo.username);
		});
	},
	loadCartInfo:function(){

	}
}
module.exports=nav.init();