const mongoose = require('mongoose');
const Cours = require('./cours')
const customerSchema = new mongoose.Schema({
    firstName : {
        type : String,
        require: [true, 'required!']
    },
    lastName : {
        type : String,
        require: [true, 'required!']
    }, 
    email: {
        type : String,
        require: [true, 'required!']
    },
    password: {
        type : String,
        require: [true, 'required!']
    },
    gender : {
        type : String,
        require: [true, 'required!']
    },
    cours: [{type: mongoose.Schema.Types.ObjectId, ref: "Cours"}]
}
,{
    timestamps :true , versionKey : false
       })



module.exports = mongoose.model('Customer',customerSchema);