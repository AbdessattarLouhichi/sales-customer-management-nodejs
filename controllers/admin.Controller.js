const User = require('../models/authentification');

exports.findAdmin = async (req,res)=>{
    try{
    const users = await User.find({})
     res.send(users)
    } catch (error) {
        return res.status(500).json({message : 'Error Server'})
    }
}


exports.createAdmin =  async(req,res)=>{
    try{
    
    const user = await User.create(req.body)
    .then((user)=>{
        res.send(user);
    })
    } catch (error) {
        return res.status(500).json({message : 'Error Server'})
    }
}