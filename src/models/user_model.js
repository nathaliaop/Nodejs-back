const validator = require('validator')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
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
        max: 12,
        select: false
    },
    isAdmin:{
        type: Boolean
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
})

const User = mongoose.model('User', UserSchema);
module.exports = User;