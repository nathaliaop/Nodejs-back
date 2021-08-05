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

/*const postagens = []

const loginValidation = {
    body: Joi.object({
        title: Joi.string()
            .required(),
            //.isLength({ min: 5, max:5 });
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .regex(/[a-zA-Z0-9]{3,30}/)
        .required(),
    }),
  }

router.get('/postagens/:id', (req,res) => {
    const { id } = req.params
    return res.json(postagens[id])
})

router.get('/postagens', (req,res) => {
    return res.json(postagens)
})

router.post('/postagens', validate(loginValidation, {}, {}), (req,res) => {
    const errors = ValidationError;
    if (!errors) {
        return
    }
    else{
        const id = postagens.length+1
        var newPost = {
            id: id,
            title: req.body.title
        };
        postagens.push(newPost)
        return res.json(postagens)
    }
})

router.put('/postagens/:id', (req,res) => {
    try {
        const id = parseInt(req.params.id)
        var newPost = {
            id: id,
            title: req.body.title
        };
        postagens[id] = newPost
        return res.json(postagens[id])
    } catch (error) {
        console.log('error');
        res.sendStatus(500);
    }
})

router.delete('/postagens/:id', (req,res) => {
    const id = parseInt(req.params.id)
    postagens.splice(id,1)
    return res.sendStatus(200)
})*/

module.exports = router