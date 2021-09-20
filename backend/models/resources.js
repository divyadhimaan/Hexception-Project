const mongoose = require("mongoose");
var db=require("../config/db");

const ResourceSchema = new mongoose.Schema({
  description:String,

  link:String,
});

userTable = mongoose.model("resource",ResourceSchema);

        
module.exports={
     
     fetchData:function(callback){
        var userData=userTable.find({});
        userData.exec(function(err, data){
            if(err) throw err;
            return callback(data);
        })
        
     }
}