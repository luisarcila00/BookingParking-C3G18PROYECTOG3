const UsersModel = require('../models/reservas.model')

module.exports = class ReservasApi {
    // El controlador que sera llamado para cada acción
    static async getAll(req, res) {
        try {
            const users = await UsersModel.find()
            res.status(200).json(users)
        } catch (e) {
            res.status(404).json(e.message)
        }
    }

    static async getById(req, res) {
        try {
            const Id = req.params.code
            const user = await UsersModel.findOne({code: Id})
            if (!user) return res.status(404).json({message: 'No encontrado en la base de datos'})
            res.status(200).json(user)
        } catch (e) {
            res.status(400).json(e.message)
        }
    }

    static async create(req, res) {
        try {
            let newUser = req.body
            newUser = await UsersModel.create(newUser)
            res.status(201).json(newUser)
        } catch (e) {
            res.status(400).json({message: e.message})
        }
    }

    static async update(req, res) {
        try {
            let email = req.params.email
            const toUpdate = req.body
            await UsersModel.updateOne({email: email}, toUpdate)
            res.status(200).json()
        } catch (e) {
            res.status(400).json({message: e.message})
        }
    }

    static async delete(req, res) {
        try {
            let email = req.params.email
            await UsersModel.deleteOne({email: email})
            res.status(200).json()
        } catch (e) {
            res.status(400).json({message: e.message})
        }
    }
}