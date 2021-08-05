const express = require('express')
const router = require('express').Router()

router.use('/', require('./postagens.js'))
router.use('/', require('./usuarios.js'))

module.exports = router