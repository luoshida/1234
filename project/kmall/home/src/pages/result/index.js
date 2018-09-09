require('./index.css');
require('pages/common/logo');
require('pages/common/foot');
var _util = require('util');

$(function(){
	var type = _util.getParamFromUrl('type');
	console.log(type);
	$('.'+type).show();
})