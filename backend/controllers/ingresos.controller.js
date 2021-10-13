const Model = require('../models/ingresos.model')
const Cupos = require('../models/cupos.model')
const moment = require('moment')
module.exports = class Api {
    // El controlador que sera llamado para cada acción
    static async getAll(req, res) {
        try {
            const users = await Model.find()
            res.status(200).json(users)
        } catch (e) {
            res.status(404).json(e.message)
        }
    }

    static async getById(req, res) {
        try {
            const Id = req.params.code
            const reserva = await Model.findOne({code: Id})
            if (!reserva) return res.status(404).json({message: 'No encontrado en la base de datos'})
            res.status(200).json(reserva)
        } catch (e) {
            res.status(400).json(e.message)
        }
    }

    static async create(req, res) {
        try {
            if (!req.body.placa) return res.status(400).json({message: 'Debe ingresar una placa'})
            let cupos = await Cupos.findOne({code: '003'})
            let registros = await Model.count({fecha_salida: ''})
            let reserva = await Model.findOne({placa: req.body.placa})
            if (reserva && !reserva.fecha_salida) {
                req.body.fecha_salida = moment().format('YYYY-MM-DD HH:mm:ss')
                reserva = await Model.updateOne({placa: req.body.placa}, req.body)
            } else {
                if (!req.body.type) return res.status(400).json({message: 'Debe ingresar un tipo de vehiculo'})
                req.body.fecha_salida = ''
                req.body.fecha_ingreso = moment().format('YYYY-MM-DD HH:mm:ss')
                reserva = await Model.create(req.body)
            }
            res.status(201).json(reserva)
        } catch (e) {
            res.status(500).json({message: e.message})
        }
    }

    static async update(req, res) {
        try {
            let code = req.params.code
            const toUpdate = req.body
            await Model.updateOne({code: code}, toUpdate)
            res.status(200).json()
        } catch (e) {
            res.status(400).json({message: e.message})
        }
    }

    static async delete(req, res) {
        try {
            let code = req.params.code
            await Model.deleteOne({code: code})
            res.status(200).json()
        } catch (e) {
            res.status(400).json({message: e.message})
        }
    }
}