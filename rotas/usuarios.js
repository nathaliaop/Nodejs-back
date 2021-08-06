const express = require('express');
const router = require('express').Router();
const User = require('../models/user.js');

router.get('/usuarios', function(req, res, next){
    User.find({}).then(function(Users){
        res.send(Users);
    }).catch(next);
});

router.get('/usuarios/:id', function(req, res, next){
    User.findOne({_id: req.params.id}).then(function(User){
        res.send(User);
    }).catch(next);
});

router.post('/usuarios', function(req, res, next){
    User.create(req.body).then(function(User){
        res.send(User);
    }).catch(next);
});

router.put('/usuarios/:id', function(req, res, next){
    User.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        User.findOne({_id: req.params.id}).then(function(User){
            res.send(User);
        });
    }).catch(next);
});

router.delete('/usuarios/:id', function(req, res, next){
    User.findByIdAndRemove({_id: req.params.id}).then(function(User){
        res.send(User);
    }).catch(next);
});

module.exports = router