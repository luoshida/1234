require('./index.css');
require('pages/common/nav');
require('pages/common/search');

var _util = require('util');

var page = {
	listParams:{
		keyword:_util.getParamFromUrl('keyword') || '',
		categoryId:_util.getParamFromUrl('categoryId') || '',
		page:_util.getParamFromUrl('page') || 1,
		orderBy:_util.getParamFromUrl('orderBy') || 'default',
	},
	init:function(){
		this.bindEvent();
	},
	bindEvent:function(){
		var _this = this;
		$('.list-sort li').on('click',function(){
			var $this=$(this);
			if ($this.hasClass('sort-default')) {
				if ($this.hasClass('active')) {
					return;
				}
				$this.addClass('active')
				.siblings()
				.removeClass('active');
				_this.listParams.orderBy = 'default';
					
			}
			else if($this.hasClass('sort-price')){
				$this.addClass('active')
				.siblings()
				.removeClass('active');
				if (!$this.hasClass('asc')) {
					$this.addClass('asc')
					.removeClass('desc');
					_this.listParams.orderBy = 'price-asc';					
				}else{
					$this.addClass('desc')
					.removeClass('asc');
					_this.listParams.orderBy = 'price-desc';
				}
			}
			_this.loadProductList();
		});	
	},
	loadProductList:function(){
		this.listParams.categoryId
		? (delete this.listParams.keyword)
		: (delete this.listParams.categoryId)
		console.log(this.listParams);
	}
}

$(function(){
	page.init();
})