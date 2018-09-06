var _util = {
	request: function (params) {
		var _this = this;
		$.ajax({
			url:params.url || '',
			type:params.type || 'get',
			data:params.data || '',
			dataType:params.dataType || 'json',
			success:function(result){
				if (result.status == 0) {
					params.success && params.success(result.data)
				}else if(result.status==10){
					_this.doLogin();
				}else if(result.status==1){
					params.error && params.error(result.messages)
				}
			},
			error:function(err){
				params.error && params.error(err.statusText)
			}
		})
	},
	showErrorMsg:function(msg){
		alert(msg);
	},
	doLogin:function(){
		window.location.href='./user-login.html'
	}
}

module.exports = _util;