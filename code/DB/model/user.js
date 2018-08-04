	const mongoose = require('mongoose');

	const UserSchema = new mongoose.Schema({
		name:{
			type:String,
			// required:[true,'用户名必须输入'],
			maxlength:[10,'长度不能超过10个字符'],
			minlength:[3,'长度不能少于3个字符'],
		},
		age:{
			type:Number,
			min:[5,'年龄不能小于5岁'],
			max:[100,'年龄不能超过100岁'],
		},
		sex:{
			type:String,
			enum:["male","female"]
		},
		date:{
			type:Date,
			default:Date.now
		},
		locked:{
			type:Boolean
		},
		score:{
			type:Array
		},
		author:{
			type:mongoose.Schema.Types.ObjectId
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

	//自定义实例方法 this是一个实例对象
	UserSchema.methods.findMyBlogs = function(callback){
	
		this.model('blos').find({author:this._id},(err,docs)=>{
			callback(err,docs); 
		})
	}
	//自定义静态方法 this是 test集合 的 model类的 本身
	//this 是 UserModel
    //Model.model()方法返回一个指定的Model,因此this和this.model('User'))相等 
	UserSchema.statics.findByPhone = function(phone,callback){
		//this.model('test') == this
		this.find({phone:phone},(err,data)=>{
			callback(err,data)
		})
	}


	const useModel = mongoose.model('test',UserSchema);

	module.exports = useModel;