
let wish = require('../model/wish.js');
let swig = require('swig');
let queryString = require('querystring');	
class Wish{
	//显示许愿墙页面
	index(req,res,...args){
		wish.get((err,data)=>{
			if(!err){
				let template = swig.compileFile(__dirname+'/../view/wish/index.html');
				let html = template({
				   data:data
				});
				res.setHeader('Content-Type','text/html;charset=UTF-8');
				res.end(html);	
			}else{
				console.log(err);
			}
		});	
	}

	del(req,res,...args){
		
		wish.remove(args[0],(err)=>{
			if (!err) {
				var result = {status:1}
				res.end(JSON.stringify(result));
			}
		});
	}
	
	add(req,res,...args){
		var body = '';
		req.on('data',(chunk)=>{
			body += chunk;
		});
		req.on('end',()=>{
			let obj = queryString.parse(body);
			
			wish.add(obj,(err,data)=>{
				if (!err) {
					var result={
						status:1,
						data:data
					}
				}else{
					var result={
						status:2,
						message:'添加失败'
					}
				}
				res.end(JSON.stringify(result));
			})
		})
	}
}


module.exports = new Wish();