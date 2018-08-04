const mongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// const uuidv1 = require('uuid/v1');
const url = 'mongodb://127.0.0.1:27017';
const fs = require('fs');
const path = require('path');


var getRandomColor = function(){
    return  '#' +
    (function(color){
        return (color += '0123456789abcdef'[Math.floor(Math.random()*16)])
        && (color.replace(/^0/,"").length == 6) ?  color : arguments.callee(color);
    })('');
}


// Use connect method to connect to the server

let mg = function(callback){
  mongoClient.connect(url,{ useNewUrlParser: true },function(err, client) {

    assert.equal(null, err);
    console.log("Connected successfully to server");
    const db = client.db('lsd');
    
    callback(db,client);
  });
};

  //插入
  
let add = (options,callback)=>{
  mongoClient.connect(url,{ useNewUrlParser: true },function(err, client) {

      assert.equal(null, err);
      console.log("Connected successfully to server");
      const db = client.db('lsd');
      
      const ds = db.collection('new');
      // options.id = uuidv1();
      options.color = getRandomColor();
      ds.insert(options,function(err,result){
        if (!err) {
           callback(null,options);
        }
        else{
          callback(err);
        }
        client.close();
      });
  
  });
};
 
let remove = (id,callback)=>{
  mg((db,client)=>{
    const ds = db.collection('new');
    ds.remove({_id:id},function(err,result){
      if (!err) {
        callback(null,result);
      }else{
        callback(err);
      } 
      client.close(); 
    });
    
  });
     
};



// ds.updateOne({name:"cc"},{$set:{age:99}},function(err,result){
// 	// console.log(result);
// })

let get = (callback)=>{
    mongoClient.connect(url,{ useNewUrlParser: true },function(err,client) {

      assert.equal(null, err);
      console.log("Connected successfully to server");
      const db = client.db('lsd');
      
      const ds = db.collection('new');
 
          
      ds.find().toArray(function(err,result){
          if(!err){
              callback(null,result);
          }else{
              callback(err);
          }
          client.close();
      });
  
    });
};

module.exports = {
    get:get,
    add:add,
    remove:remove
}

