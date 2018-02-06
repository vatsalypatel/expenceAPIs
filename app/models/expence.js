let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let expenceSchema = mongoose.Schema({    
    groupId: {
        _id : {
            type: Schema.Types.ObjectId,
            ref: 'groups'
        }        
    },
    expence : {
        value : {
            type : Number,
            required : true
        },
        type : {
            type : String,
            required : true
        }
    },
    payBy : {
        _id : {
            type : Schema.Types.ObjectId,
            ref: 'users'
        }
    },
    payFor : {
        _id : {
            type : Schema.Types.ObjectId,
            ref: 'categories'
        }
    },
    description : {
        type : String,
        required : true
    },
    expeDate : {
        type : Date,
        default: Date.now
    }
});
module.exports = mongoose.model('expence', expenceSchema);