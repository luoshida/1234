require('./index.css');
require('pages/common/logo/index.js');
var _user = require('service/user');

var page = {
	init:function(){
		this.bindEvent();
	},
	bindEvent:function(){
		var _this=this;
		$('#user-load-btn').on('click',function(){
			_this.bindSubmit()
		})
	},
	bindSubmit:function(){
		var inputValue={
			username:$.trim($('[name="username"]').val()),
			password:$.trim($('[name="password"]').val()),
		};
		function eventStart(){
			$('.head-login').hide();
			$('.err').show();
		}
		function eventDone(){
			$('.head-login').show();
			$('.err').hide();
		}
		if (inputValue.username=='' && inputValue.password=='') {
			eventStart();
			$('.err span').html('用户名和密码不能为空');
		}else if (inputValue.username=='') {
			eventStart();
			$('.err span').html('用户名不能为空');
		}else if (inputValue.password=='') {
			eventStart();
			$('.err span').html('密码不能为空');
		}else{
			eventDone();
			_user.login({name:inputValue.username,password:inputValue.password},function(data){
				window.localStorage.setItem('username',data.password)
				console.log(data);
			},function(message){
				console.log(message);
			});
		}
	}
}
$(function(){
	page.init();
})
