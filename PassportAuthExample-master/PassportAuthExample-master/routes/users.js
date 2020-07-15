'use strict';
var express = require('express');
var router = express.Router();
var passport = require('passport');
var userModel = require('../models/user');
var bcrypt = require('bcryptjs');

/* GET users listing. */
router.get('/', function (req, res) {
    //res.send('respond with a resource');
    try {
        const USER = new userModel();
        USER.save();
        //Retrieve all articles if there is any 
        userModel.find({}, function (err, foundArticles) {
            console.log(err);
            console.log(foundArticles);
            //Pass found articles from server to pug file
            res.render('Users', { users: foundArticles });
        });

        // var foundArticles = articlesModel.find();
        //res.render('index', { Articles: foundArticles });
    } catch (err) {
        console.log(err);
        res.render('/Users', { title: 'Express' });
    }
});
router.get('/Users', function (req, res) {
    try {
        const USER = new userModel();
        USER.save();
        //Retrieve all articles if there is any 
        userModel.find({}, function (err, foundArticles) {
            console.log(err);
            console.log(foundArticles);
            //Pass found articles from server to pug file
            res.render('Users', { users: foundArticles });
        });

        // var foundArticles = articlesModel.find();
        //res.render('index', { Articles: foundArticles });
    } catch (err) {
        console.log(err);
        res.render('/Users', { title: 'Express' });
    }

});

module.exports = router;
