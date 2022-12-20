const User = require('../models/authentification');
const authRole = (role)=>{
    return (req,res,next)=>{
        const user =  User.findById(req.params.id)
        if (user.role !==role) {
            res.status(401).json('not allowed')
        } else {
            next()
        }
    }
}

module.exports = authRole;