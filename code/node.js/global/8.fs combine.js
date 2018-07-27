const fs = require('fs');
// const uuidv1 = require('uuid/v1');
let jsonPath = './aaa.json' ;

// let add = (id,name,callback) => {
// 	fs.readFile(jsonPath,(err,data)=>{
// 		if (!err) {
// 			// console.log(data);
// 			let obj= JSON.parse(data);
// 			// console.log(obj);
// 			obj.push({
// 				// id:uuidv1(),
// 				id:id,
// 				name:name
// 			});
// 			let str =JSON.stringify(obj);
// 			fs.writeFile(jsonPath, str, (err)=>{
// 				if (!err) {
// 					callback(null,str);
					
// 				} else {
// 					callback(err);
// 				}
// 			})
// 		} else {
// 			callback(err);
// 		}
		
// 	});
// }
// add('77','fxm',(err,data)=>{
// 	if (!err) {
// 		console.log('file success',data);
// 	} else {
// 		console.log('file error');
// 	}
// });

// let get =(id,callback)=>{
// 	fs.readFile(jsonPath,(err,data)=>{
// 		if (!err) {
// 			let obj= JSON.parse(data);
// 			let result ={};
// 			obj.some((val)=>{
// 				if (val['id']==id) {
// 					result=val;
// 					return true;
// 				}
// 				// console.log('11',val);
// 			})
// 			// console.log('11',result);
// 			callback(null,result['name']);
// 		} else {
// 			callback(err);
// 		}
// 	})
// }
// get('77',(err,data)=>{
// 	if (!err) {
// 		console.log('file success',data);
// 	} else {
// 		console.log('file error');
// 	}
// });

// let update = (id,name,callback)=>{
// 	fs.readFile(jsonPath,(err,data)=>{
// 		if (!err) {
// 			let obj = JSON.parse(data);
// 			obj.some((val)=>{
// 				if (val['id']==id) {
// 					val['name']=name;
// 					return true;
// 				}
// 			})
// 			let str =JSON.stringify(obj);
// 			fs.writeFile(jsonPath, str, (err)=>{
// 				if (!err) {
// 					callback(err,str);
					
// 				} else {
// 					callback(err);
// 				}
// 			})
// 		} else {
// 			callback(err);
// 		}
// 	})
// }
// update('88','popule',(err,data)=>{
// 	if (!err) {
// 		console.log('file success',data);
// 	} else {
// 		console.log('file error');
// 	} 
// })

// let remove = (id,callback) => {
// 	fs.readFile(jsonPath,(err,data)=>{
// 		if (!err) {
// 			let obj = JSON.parse(data);
// 			let newObj = obj.filter((val)=>{
// 				return val['id'] != id;
// 			})
// 			let str =JSON.stringify(newObj);
// 			fs.writeFile(jsonPath, str, (err)=>{
// 				if (!err) {
// 					callback(newObj,str);
					
// 				} else {
// 					callback(newObj);
// 				}
// 			})
// 		} else {
// 			callback(err);
// 		}
// 	})
// }
// remove('1',(err,data)=>{
// 	if (!err) {
// 		console.log('file success',data);
// 	} else {
// 		console.log('file error');
// 	} 
// })