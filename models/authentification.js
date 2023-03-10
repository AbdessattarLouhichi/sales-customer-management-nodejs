const mongoose = require('mongoose');
const authSchema = new mongoose.Schema({
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
    role : {
        type : String,
        enum : ["admin", "user", "customer"],
        default:"admin"
    }
},{
    timestamps :true , versionKey : false
       })




module.exports = mongoose.model('User',authSchema);