const validator = require('validator')
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type: String,
        required: [true, 'Nome invalido']
    },
    email:{
        type: String,
        required: [true, 'Conteudo invalido'],
        unique: [true, 'Já tem alguem com esse email'],
        lowercase: true,
        validate: [ validator.isEmail, 'invalid email' ]
    },
    password:{
        type: String,
        required: [true, 'Senha invalida'],
        min: [8, 'Senha muito curta'],
        max: 12
    },
    isAdmin:{
        type: Boolean
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;