
const cuposModel = require('../models/cupos.model');

module.exports = class cuposController {
    static async getAll(req, res){
        try{
             const cupos = await cuposModel.find();
             res.status(200).json(cupos);
        }catch(err){
             res.status(404).json({message: err.message});
        }
    }
    static async getByCode(req, res){
        try {
            const code = req.params.code;
            const cupo = await cuposModel.findOne({"code": code});
            if(cupo == null){
                res.status(404).json({message: "no encontrado"})
            }else{
                res.status(200).json(cupo);
            }
        } catch (err) {
            res.status(404).json({message: err.message});
            
        }
    }

    static async create(req, res){
        try {
            let cupo = req.body;
            cupo = await cuposModel.create(cupo);
            res.status(201).json(cupo);
        } catch (err) {
            res.status(400).json({message: err.message})
        }
    }

    static async update(req, res){
        const code = req.params.code;
        const cupo = req.body;
        try {
            await cuposModel.updateOne({code: code}, cupo);
            res.status(200).json();
        } catch (err) {
            res.status(400).json({message: err.message});
        }
    }

    static async delete(req, res){
        try{
            const code= req.params.code;
            await cuposModel.deleteOne({code: code});
            res.status(200).json();
        }catch(err){
            res.status(400).json({message: err.message});    
        }
    }

}