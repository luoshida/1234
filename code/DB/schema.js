
const mongoose = require('mongoose');
var moment = require('moment');
var blogModel = require('./model/blog.js');
var useModel = require('./model/user.js');

mongoose.connect('mongodb://localhost:27017/lsd', {useNewUrlParser: true});
let db = mongoose.connection;
db.on('error',(err)=>{
	throw err;
});
db.once('open',()=>{

	console.log('connected ok.....');

	// useModel.insertMany({phone:'17356425623',sex:'male'},(err,docs)=>{
	// 	if(!err){
	// 		console.log(docs);
	// 	}else{
	// 		console.log(err.message);
	// 	}
	// })

	// useModel.find({},(err,data)=>{
	// 	console.log(moment(data[0].date).format('YYYY-MM-DD、HH:mm:ss'));
	// })

	// useModel.findOne({name:"lsd"},(err,data)=>{
	// 	data.findMyBlogs((err,docs)=>{
	// 		console.log(docs);
	// 	})
	// })
	// useModel.findByPhone('17356425623',(err,data)=>{
	// 	if (!err) {
	// 		console.log(data);
	// 	}
	// })

	//文件关联
	// blogModel.findOne({content:"blog1"}).populate('author','name').then((data)=>{
	// 	console.log(data);
	// })

	blogModel.findAuthor({content:"blog1"},'author',(data)=>{
		console.log(data);
	});

	// blogModel.findAuthor({},'author')
	// .then((data)=>{
	// 	console.log(data);
	// })
})


