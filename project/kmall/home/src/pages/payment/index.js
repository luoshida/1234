require('./index.css');
require('pages/common/nav');



var tpl = require('./content.tpl');

var page= {
	init:function(){
		this.onload();
		this.bindEvent();
	},
	onload:function(){
		
	},

	bindEvent:function(){
		
	}
	
}
$(function(){
	page.init();
})