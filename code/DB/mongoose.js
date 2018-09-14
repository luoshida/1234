

//把Schema规则通过require请求过来 书写上简洁
const useModel = require('./model/user.js');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lsd');
let db = mongoose.connection;
db.on('error',(err)=>{
	throw err;
});
db.once('open',()=>{
	console.log('connected ok.....');


// 	const UserSchema = new mongoose.Schema({
// 		name:String,
// 		age:Number,
// 		sex:String
// 	});
// //'new'会默认变为小写 并且加上s变为news 建的集合带s就正常新建
// 	const useModel = mongoose.model('new',UserSchema);


新增 103
Model.insertMany()
新增 129
Model.prototype.save()
新增 120
Model.create()

查找 50
Model.find()
Model.findById()
Model.findOne()

更新 76
Model.update()
Model.updateMany()
Model.updateOne()

删除 89
Model.remove()
Model.deleteOne()
Model.deleteMany()

去除重复值 123
Model.distinct()

//用useModel集合上面的方法来进行删除、更新、查找的操作
	// useModel.find({},(err,docs)=>{
	// 	if (!err) {
	// 		//docs是一个包含对象数据的数组
	// 		console.log(docs);	
	// 		console.log(docs[0].name);	
	// 	}
	// });
	//skip跳过前几个显示后面的，limit显示几个，sort排序 1正序 -1倒序
	// useModel.find({age:{$gt:10}},{name:1,age:0},{skip:1,limit:1},(err,docs)=>{})
	// useModel.find({age:{$gt:10}},{name:1,age:0},{sort:{name:-1}},(err,docs)=>{})
	// useModel.find({age:{$gt:10}},null,{sort:{name:-1}},(err,docs)=>{})
	
	//findOne和find格式一样 只显示一个
	// useModel.findOne({},{},{},()=>{返回的data是一个对象});

	//系统生成的 ObjectId("5b6260efa822610554865892")是一个对象
	// useModel.findById('5b6260efa822610554865892',(err,data)=>{
	// 	if (!err) {
	// 		console.log(data);
	// 		console.log(data._id.toString());
	// 	}
	// 	//data是查找到该id所在的对象 data._id还是一个对象 
	// });



	// useModel.update({name:"Tom"},{$set:{age:99}},(err,docs)=>{
	// 	if (!err) {
	// 		//docs是一个对象{n:删除的个数,nModified:删除的个数,ok:1}
	// 		console.log(docs)	
	// 	}
	// })
	// useModel.update({name:"Tom"},{age:99},(err,docs)=>{});
	//multi变为更新所有 默认false更新一个
	// useModel.update({name:"Tom"},{age:99},{multi:true},(err,docs)=>{});
	// useModel.updateOne({name:"Tom"},{age:99},(err,docs)=>{});
	// useModel.updateMany({name:"Tom"},{age:99},(err,docs)=>{});


	// useModel.remove({name:"leo"},(err,docs)=>{
	// 	if (!err) {
	// 		//docs是一个对象{n:删除的个数,ok:1}
	// 		console.log(docs)
	// 	}
	// })
	//setOptions single:true删除一个 默认所有
	// useModel.remove({name:"leo"})
	// .setOptions({single:true})
	// .then((docs)=>{});
	// useModel.deleteOne({},()=>{});
	// useModel.deleteMany({},()=>{});

	//没有useModel.insert()这个方法
	useModel.insertMany({name:"qqq4",age:74},(err,docs)=>{
		if (!err) {
			//docs是一个数组[{name:"qqq4",age:74}] 插入内容
			console.log(docs);
		}else{
			console.log(err);
		}	
	})
	// let promise = useModel.insertMany([{name:"qqq",age:44},{}])
	// promise
	// .then((docs)=>{
	// 	console.log(docs);
	// })	
	// .catch((err)=>{
	// 	console.log('insert error');
	// })
	//creat创建效率没有insertmany和save高
	// useModel.create([{},{}],(err,docs)=>{})

	//distinct不改变原来的数据
	// useModel.distinct('name',{},(err,docs)=>{
	// 	//docs是一个去除name的重复值后返回的一个 值的数组
	// 	if (!err) {console.log(docs)}
	// 	else(console.log('distinct error'))
	// })


//user插入 user.save保存插入的内容
	// const user = new useModel({name:'leo',age:581,sex:'male'});
	// user.save((err,doc)=>{
	// 	if (!err) {
	// 		//doc是一个对象 内容为插入的对象
	// 		console.log(doc.toString());
	// 	} else{
	// 		console.log('save data error..',err)
	// 	}
	// });
	// user
	// .save()
	// .then((docs)=>{
	// 	console.log(doc);
	// })
	// .catch((err)=>{
	// 	console.log('save data error..')
	// })

});	