require('./index.css');
var _user = require('service/user');
var _util = require('util');

var nav={
	init:function(){
		this.bindEvent();
		this.loadUsername();
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
	loadUsername:function(){
		_user.getUsername(function(user){
			$('.user-load').hide();
			$('.user-loaded').show().find('.username')
			.text(user.username);
		});
	},

}
module.exports=nav.init();