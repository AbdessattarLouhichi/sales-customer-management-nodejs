const User = require('../models/authentification');
module.exports = function authRole(role){
    return (req,res,next)=>{
        const user = req.user
        if (user.role !==role) {
            res.status(401).json('not allowed')
        } else {
            next()
        }
    }
}

