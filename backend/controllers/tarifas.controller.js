const { request } = require('express');
const tarifasModel = require('../models/tarifas.model');

module.exports = class tarifasController {

    static async getAll( req, res){
        try {
            const tarifas = await tarifasModel.find();
            res.status(200).json(tarifas);
        } catch (error) {
            res.status(404).json({message: error.message});
        }
    }//obtener todas las tarifas

    static async getByCode(req, res){
        try {
            const code= req.params.code;
            const tarifa = await tarifasModel.findOne({code: code});
            if(tarifa == null){
                res.status(404).json({message: "no encontrado"});
            }else{
                res.status(200).json(tarifa);
            }

        } catch (error) {
            res.status(404).json({message: error.message});
        }

    }

    static async create(req, res){
        try {
            let tarifa = req.body;
            tarifa = await tarifasModel.create(tarifa);
            res.status(201).json(tarifa);
        } catch (error) {
            res.status(404).json({message: error.message});
            
        }
    }

    static async update(req, res){
        try {
            const code = req.params.code;
            const tarifa = req.body;
            await tarifasModel.updateOne({code: code}, tarifa)
        } catch (error) {
            
        }
    }

    static async delete(req, res){
        try {
            const code= res.params.code;
            await tarifasModel.deleteOne({code: code});
            res.status(200).json();
            
        } catch (error) {
            res.status(404).json({message: error.message});
        }
    }
}