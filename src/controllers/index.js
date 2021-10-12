const express = require('express')
const router = require('express').Router()

router.use('/', require('./authentication_controller'))
router.use('/', require('./post_controller'))
router.use('/', require('./user_controller'))

module.exports = router