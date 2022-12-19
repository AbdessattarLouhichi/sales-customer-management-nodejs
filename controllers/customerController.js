const Customer = require('../models/customer');
const Cours = require('../models/cours');
const customer = require('../models/customer');

exports.createCutomer = async(req,res)=>{
    try{
    const customer = await Customer.create(req.body)
    .then((customer)=>{
        res.send(customer);
    })
    } catch (error) {
         return res.staus(500).json({message : 'Error Server'})
    }
}


exports.findAdmin = async (req,res)=>{
    try{
    const customers = await Customer.find({})
     res.send(customers)
    } catch (error) {
        return res.staus(500).json({message : 'Error Server'})
    }
}


exports.buy = async (req,res)=>{
    try {
        const cours = await Cours.findById(req.params_idCours);
        await Customer.findByIdAndUpdate(req.params._idUser,{$push:{cours : req.params._idCours}});
        await Cours.findByIdAndUpdate(req.params_idCours,{ $inc: { purchases:  +1 } });
        const customer =  await Customer.findById(req.params._idUser).populate('cours');
        //notify customer by mail
        sendEmail(customer, cours)
        res.satus(200).json(customer);
    } catch (error) {
        return res.staus(500).json({message : 'Error Server'})
    }
    
}