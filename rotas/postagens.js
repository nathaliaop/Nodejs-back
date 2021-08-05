const express = require('express');
const router = require('express').Router();
const Post = require('../models/post.js');

//const { validate, ValidationError, Joi } = require('express-validation')

router.get('/postagens', function(req, res, next){
    Post.find({}).then(function(Posts){
        res.send(Posts);
    }).catch(next);
});

router.get('/postagens/:id', function(req, res, next){
    Post.findOne({_id: req.params.id}).then(function(Post){
        res.send(Post);
    }).catch(next);
});

// add a new Post to the db
router.post('/postagens', function(req, res, next){
    Post.create(req.body).then(function(Post){
        res.send(Post);
    }).catch(next);
});

// update a Post in the db
router.put('/postagens/:id', function(req, res, next){
    Post.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Post.findOne({_id: req.params.id}).then(function(Post){
            res.send(Post);
        });
    }).catch(next);
});

// delete a Post from the db
router.delete('/postagens/:id', function(req, res, next){
    Post.findByIdAndRemove({_id: req.params.id}).then(function(Post){
        res.send(Post);
    }).catch(next);
});

module.exports = router