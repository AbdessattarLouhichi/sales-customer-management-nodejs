const User = require('../models/authentification');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

let secret = process.env.SECRET_KEY;
// Register user
exports.register = async (req,res)=>{
    try {
        const {email,password} = req.body
           
        // Check if user exists
        const userExist = await User.findOne({email : email})
       
        if (userExist){
            res.status(400).json({message : 'Email is already  used'})
        }

        // crypt password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        req.body.password = hashedPassword;

        // save user 
        const newUser = await User.create(req.body);
        console.log(password , hashedPassword)
        res.status(201).json(newUser)

    } catch (error) {
        res.status(500).json({message : error.message})
    }
    
}

// login user
exports.login = async (req,res)=>{
    try {
       const {email, password} = req.body;

       // find user
        const user = await User.findOne({email : email})
       
        if(!user){
           return res.status(400).json({message : "user does not exist"})
        }

        const passMatch = await bcrypt.compare(password, user.password);
        if(!passMatch){return res.status(400).json({message : "check your email or your password!"})};
        // create token
       
        const data={
            userId : user._id,
            userEmail:user.email
        }
        const token = jwt.sign(data,secret, {expiresIn : '1h'});


        return res.status(200).json({user : user, token : token});

    } catch (error) {
        res.status(500).json({message :error.message})
    }
}