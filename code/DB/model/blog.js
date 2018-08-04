	const mongoose = require('mongoose');

	const BlogSchema = new mongoose.Schema({
		age:{
			type:Number,
			min:[15,'年龄不能小于15岁'],
			max:[30,'年龄不能超过30岁'],
		},
		date:{
			type:Date,
			default:Date.now
		},
		author:{
			type:mongoose.Schema.Types.ObjectId,
			//设置关联的集合
			ref:'test'
		},
		content:{
			type:String
		},
		phone:{
			type:String,
			//自定义验证规则
			validate:{
            	validator:function(v){
               		return /1[3758]\d{9}/.test(v)
            	},
           		message:'{VALUE} 不是合法电话号码'
        	}
		}
	});

	
	BlogSchema.statics.findAuthor=function(query={},reg,callback){
		this.find(query).populate(reg).then((data)=>{
			callback(data);
		}).catch((err)=>{
			callback(err);
		})
	};
	// BlogSchema.statics.findAuthor=function(query={},reg){
	// 	let promise = new Promise((resolve,reject)=>{
	// 		this.find(query).populate(reg).then((data)=>{
	// 			resolve(data);
	// 		}).catch((err)=>{
	// 			reject(err);
	// 		})
	// 	})

	// 	return promise;
	// }
	const blogModel = mongoose.model('blos',BlogSchema);

	module.exports = blogModel;