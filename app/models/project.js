let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let projectSchema = mongoose.Schema({
    project_id: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    location: {
        type:{
            type: String,
            enum: [
                "Point",
                "MultiPoint",
                "LineString",
                "MultiLineString",
                "Polygon",
                "MultiPolygon"
            ],
            default: "MultiPoint"
        },
        coordinates:{
            type: [[Number]],
            default: [[-117.130737, 32.736462],[-117.130737,32.736462]]
        } 
    },
    description : {
        type: String
    },
    no_of_assessment: {
        type:Number
    },
    last_assessment_phase:{
        type:Schema.Types.ObjectId,
        ref:"project-phases"
    },
    sub_phase:{
        type: Schema.Types.ObjectId,
        ref:"project-phases"
    },
    startDate : {
        type: String
    },
    endDate: {
        type: String
    },
    budget: {
        type: Number,
        required: true
    },
    _idProjectType: {   // Project Type Reference Key (PK)
        _id : {
            type: Schema.Types.ObjectId,
            ref: 'project-types'
        }
    },
    //_idPhase:[{     // Project Phase Reference Key (PK)
    //    type: Schema.Types.ObjectId,
   //     ref: 'project-phases'
   // }],
    _idUser:{       // Created User Reference Key (PK)
        _id : {
            type: Schema.Types.ObjectId,
            ref: 'users'
        }
    },
    _idLastUser:{   // Last User Who updated Project User Reference key (PK)
        _id : {
            type: Schema.Types.ObjectId,
            ref: 'users'
        }
    },
    status: {       // Project status
        type: String,
        required: true,
        enum: ["onhold", "inprogress", "pending", "cancel", "complete"]
    },
    active : {
        type: Boolean,
        default: true 
    },
    date_Created: {
        type: Date
    },
    date_Modified: {
        type: Date,
        default: Date.now
    },
    display: {
        type: Boolean
    }
});
//create the model for projects and expose it to our app
module.exports = mongoose.model('projects', projectSchema);