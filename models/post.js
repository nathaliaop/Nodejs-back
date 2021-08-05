const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title:{
        type: String,
        required: [true, 'Nome invalido']
    },
    content:{
        type: String,
        required: [true, 'Conteudo invalido']
        //unique: [true, 'Já tem alguem com esse apelido']
    },
    views:{
        type: Number,
        required: [true, 'Views invalido']
    }
});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;