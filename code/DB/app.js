

const mongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://127.0.0.1:27017';

// Use connect method to connect to the server
mongoClient.connect(url,{ useNewUrlParser: true },function(err, client) {

//判断实际值null与期望徝err是否相等(==)，如果不等，则抛出一个message的错误。
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db('lsd');


  //插入
  const ds = db.collection('new');

  // ds.insert([{name:'tr',age:20},{name:'yt',age:21}],function(err,result){
  // 	console.log(result);
  // 	client.close();
  // });

  // ds.remove({},function(err,result){
  // 	// console.log(result);
  // })


  // ds.update({name:"cc"},{$set:{age:99}},function(err,result){
  // 	// console.log(result);
  // })

  // ds.find({},function(err,result){
  //   //resule 是一个大的对象
  //   console.log(result);
    
  // })
  ds.find().toArray(function(err,result){
  //resule 是一个具有对象的数组
  	console.log(result);
  	
  })

  // 
});