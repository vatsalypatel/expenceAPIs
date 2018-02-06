let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let usersSchema = mongoose.Schema({    
   email : {
       type : String,
       require : true
   },
   password : {
       type : String,
       require : true
   },
   firstName : {
        type : String,
        require : true
   },
   lastName : {
        type : String,
        require : true
   }
});
module.exports = mongoose.model('users', usersSchema);