const express = require('express');
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user_model');

router.get('/login', async (req, res) => {
  const { email, password} = req.body;

//Gera um token novo toda vez que o usuário loga (expira em 1 dia, ou seja, 86400 segundos)
  const generateToken = function(params = {}) {
  //Gera um número aleatório em base 36 sem o '0'
  return jwt.sign(params, Math.random().toString(36).substr(2), {
    expiresIn: 86400
  })
};

  const user = await User.findOne({ email }).select('+password');

  if(!user)
  return res.status(400).send({ error: 'User not found' });

  if(!await bcrypt.compare(password, user.password))
    return res.status(400).send({ error: 'Senha errada' });

  /*if(req.headers.Authorization != token)
    return res.status(400).send({ error: 'Senha errada' });

    res.send({Authorization: req.headers.authorization })*/

  res.send({ user, token: generateToken({ id: user.id }) });
});

module.exports = router;