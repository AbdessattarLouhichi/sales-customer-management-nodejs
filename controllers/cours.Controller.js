const Cours = require('../models/cours');


exports.createCours = async(req,res)=>{
    try{
    const cours = await Cours.create(req.body)
    .then((cours)=>{
        res.send(cours);
    })
    } catch (error) {
         return res.status(500).json({message : 'Error Server'})
    }
}


exports.findCours = async (req,res)=>{
    try{
    const cours = await Cours.find({})
     res.send(cours)
    } catch (error) {
        return res.status(500).json({message : 'Error Server'})
    }
}

