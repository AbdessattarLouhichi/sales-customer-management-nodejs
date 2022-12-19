const Customer = require('../models/customer');
const Cours = require('../models/cours');
const sendEmail = require('../common/email')

exports.createCustomer = async(req,res)=>{
    try{
    const customer = await Customer.create(req.body)
    .then((customer)=>{
        res.send(customer);
    })
    } catch (error) {
         return res.status(500).json({message : 'Error Server'})
    }
}


exports.findCustomers = async (req,res)=>{
    try{
    const customers = await Customer.find({})
     res.send(customers)
    } catch (error) {
        return res.status(500).json({message : 'Error Server'})
    }
}


exports.buy = async (req,res)=>{
    try {
        const cours = await Cours.findById(req.params.idCours);
        await Customer.findByIdAndUpdate(req.params.idUser,{$push:{cours : req.params.idCours}});
        await Cours.findByIdAndUpdate(req.params.idCours,{ $inc: { purchases:  +1 } });
        const customer =  await Customer.findById(req.params.idUser).populate('cours');
        //notify customer by mail
        await sendEmail(customer, cours)
        
         res.status(200).json({customer: customer});
    } catch (error) {
         res.status(500).json({message : 'Error Server'})
    }
    
}