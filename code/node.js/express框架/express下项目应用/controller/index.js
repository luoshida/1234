
let wish = require('../model/wish.js');
let swig = require('swig');
	
class Wish{
	//显示许愿墙页面
	index(req,res,...args){
		wish.get((err,data)=>{
			if(!err){
				let template = swig.compileFile(__dirname+'/../view/index/index.html');
				let html = template({});
				res.setHeader('Content-Type','text/html;charset=UTF-8');
				res.end(html);	
			}else{
				console.log(err);
			}
		});	
	}
}


module.exports = new Wish();