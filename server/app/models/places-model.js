const mongoose = require('mongoose');
//Schema for mongo database
const PlacesSchema = new mongoose.Schema({
    path:{
        type:String,
        required: "Please enter Image's path"
    },
    title:{
        type:String,
        required: "Please enter Title of the place"
    },
    rating:{
        type:String,
        required: "Please enter Ratings of the place"
    },
    createdDate:{
        type:Date,
        default: Date.now
    },
    lastModifiedDate:{
        type:Date,
        default: Date.now
    },
    status:{
        type:Boolean,
        default:false
    }
})

PlacesSchema.virtual('id').get(()=>this._id.toHexString());
const model = mongoose.model('places',PlacesSchema);

module.exports = model;