const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const config = require('dotenv').config()

const mongo = process.env.MONGO;

const cors = require('cors')
app.use(cors())

const mongoose = require('mongoose');
mongoose.connect(mongo, {useNewUrlParser: true}).
catch(error => console.log(error));
mongoose.Promise = global.Promise;

const rotas = require('./rotas')
app.use('/',rotas)

app.use(express.static(__dirname + '/nodeblog-front'))

const port = 4000
app.listen(port, () => {
    console.log('O servidor está rodando na porta ', port)
})