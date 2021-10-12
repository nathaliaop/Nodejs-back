const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());

const config = require('dotenv').config();
const mongo = process.env.MONGO;

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);
mongoose.connect(mongo).catch(error => console.log(error));

const rotas = require('./src/controllers');
app.use('/',rotas);

const port = 4000
app.listen(port, () => {
    console.log('O servidor está rodando na porta ', port)
})