const mongoose = require('mongoose');
const coursSchema = new mongoose.Schema({
    name : {
        type : String,
        require: [true, 'required!']
    },
    description : {
        type : String,
        require: [true, 'required!']
    }, 
    purchases: {
        type : Number,
        default :0
    }
}
,{
    timestamps :true , versionKey : false
       })



module.exports = mongoose.model('Cours',coursSchema);