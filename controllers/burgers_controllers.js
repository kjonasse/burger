// Node Dependencies
var express = require('express');
var routes = express.Routes();
var burger = require('../models/burger.js');


// Create routes
// ----------------------------------------------------
// Index Redirect
routes.get('/', function (req, res) {
  res.redirect('/index');
});


// Index Page (render all burgers to DOM)
routes.get('/index', function (req, res) {
  burger.selectAll(function(data) {
    var hbsObject = { burgers: data };
    //console.log(hbsObject);
    res.render('index', hbsObject);
  });
});


// Create a New Burger
routes.post('/burger/create', function (req, res) {
  burger.insertOne(req.body.burger_name, function() {
    res.redirect('/index');
  });
});


// Devour a Burger
routes.post('/burger/eat/:id', function (req, res) {
  burger.updateOne(req.params.id, function() {
    res.redirect('/index');
  });
});
// ----------------------------------------------------


// Export routes
module.exports = routes;