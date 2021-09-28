const reservasModel = require('../models/reservas.model')

module.exports = class ReservasApi {
    static async getAll(req, res) {
        try {
            const reservas = await reservasModel.find()
            res.status(200).json(reservas)
        } catch (e) {
            res.status(404).json(e.message)
        }
    }

    static async getById(req, res) {
        try {
            const Id = req.params.code
            const reserva = await reservasModel.findOne({code: Id})
            if (!reserva) return res.status(404).json({message: 'No encontrado en la base de datos'})
            res.status(200).json(reserva)
        } catch (e) {
            res.status(400).json(e.message)
        }
    }

    static async create(req, res) {
        try {
            let reserva = req.body
            reserva = await reservasModel.create(reserva)
            res.status(201).json(reserva)
        } catch (e) {
            res.status(400).json({message: e.message})
        }
    }

    static async update(req, res) {
        try {
            let code = req.params.code
            const toUpdate = req.body
            await reservasModel.updateOne({code: code}, toUpdate)
            res.status(200).json()
        } catch (e) {
            res.status(400).json({message: e.message})
        }
    }

    static async delete(req, res) {
        try {
            let code = req.params.code
            await reservasModel.deleteOne({code: code})
            res.status(200).json()
        } catch (e) {
            res.status(400).json({message: e.message})
        }
    }
}