let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let groupsSchema = mongoose.Schema({    
    admin: {
        _id : {
            type: Schema.Types.ObjectId,
            ref: 'users'
        }        
    },
    groupName: {
        type: String,
        required: true    
    },
    relatedUsers : [
        {
            _id : {
                type : Schema.Types.ObjectId,
                ref : 'users'
            }
        }
    ]
});
module.exports = mongoose.model('groups', groupsSchema);