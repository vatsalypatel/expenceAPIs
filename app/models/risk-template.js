let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let riskTemplateSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    _idProjectType: [
        {
            _id :  {   // Project Type Reference Key (PK)
                type: Schema.Types.ObjectId,
                ref: 'project-types'
            }
        }
    ],
    _idCategory:[   // Risk Category Related with Template (PK)
        {
            _id : {
                type: Schema.Types.ObjectId,
                ref: 'risk-categories'
            },
            subCategories : [
                {
                    _id : {
                        type: Schema.Types.ObjectId,
                        ref: 'risk-categories'
                    },
                    riskElement:[
                        {
                            _id: {
                                type: Schema.Types.ObjectId,
                                ref: 'risk-elements'
                            },
                            score:Number,
                            _eleOption:[
                                {
                                    key: String,  // Yes / No
                                    score: Number, //score
                                    order: Number // Incremental format
                                }
                            ]
                        }
                    ],
                    impactScale: [
                        {
                            impactname: {
                                type: String,
                                required: true,
                                enum:["minimal", "low", "medium", "high", "extra-high"]
                            },
                            start: Number,
                            end: Number
                        }
                    ],
                    totalScore:Number
                }
            ]
        }
    ],
    _idCompany:{    // Reference of Company Related with Template (PK)
        _id : {
            type: Schema.Types.ObjectId,
            ref: 'companies'
        }
    },
    _idUser:{   // Template Created User Reference
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

module.exports = mongoose.model('risk-templates', riskTemplateSchema);