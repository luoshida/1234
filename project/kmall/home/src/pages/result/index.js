require('./index.css');
require('pages/common/logo');
require('pages/common/foot');
var _util = require('util');

$(function(){
	_util.getParamFromUrl('register');
})