const mongoose = require("../config/db");
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: {type: String, required: true, unique: true},
    senha: {type: String, required: true},
    token: {type: String},
    telefones: [
        {
            ddd: {type: Number},
            numero: {type: Number}
        }
    ],
    data_criacao: {type: Date, default: Date.now },
    data_alteracao: {type: Date}
}, {collection: 'usuario'})

userSchema.method('compare', async (formPass, userPass) => {
    return bcrypt.compare(formPass, userPass)
})

const model = mongoose.model('Usuario', userSchema, 'usuario');

module.exports = model;
