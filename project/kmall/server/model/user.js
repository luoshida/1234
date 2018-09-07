  const mongoose = require('mongoose');

  const UserModel = new mongoose.Schema({
      username:String,
      password:String,
      isAdmin:{
      	type:Boolean,
      	default:false
      },
      phone:{
        type:String
      },
      email:String,
  },{
    timestamps:true
  });

  
  const userModel = mongoose.model('user',UserModel);

  module.exports = userModel;