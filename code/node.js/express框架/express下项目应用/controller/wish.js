
let wishModel = require('../model/wishmongoose.js');
let swig = require('swig');
let queryString = require('querystring'); 


var getRandomColor = function(){
    return  '#' +
    (function(color){
        return (color += '0123456789abcdef'[Math.floor(Math.random()*16)])
        && (color.replace(/^0/,"").length == 6) ?  color : arguments.callee(color);
    })('');
}	
class Wish{
	//显示许愿墙页面
	index(req,res,...args){
		wishModel.find({},(err,data)=>{
			let template = swig.compileFile(__dirname+'/../view/wish/index.html');
			let html = template({
			   data:data
			});
			res.setHeader('Content-Type','text/html;charset=UTF-8');
			res.end(html);	
		})
		
	};

	del(req,res,...args){
		
		wishModel.remove({_id:args[0]},(err,data)=>{
			if (!err) {
				var result = {status:1}
				res.end(JSON.stringify(result));
			}
		});
	};
	
	add(req,res,...args){
		var body = '';
		req.on('data',(chunk)=>{
			body += chunk;
		});
	
		req.on('end',()=>{
			let obj = queryString.parse(body);
           	console.log(obj);
            obj.color=getRandomColor();
            console.log(obj);
         
			wishModel.insertMany(obj,(err,data)=>{
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
	};
}


module.exports = new Wish();