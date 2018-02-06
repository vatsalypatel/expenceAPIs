let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let categorySchema = mongoose.Schema({    
    name: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('categories', categorySchema);