var express = require('express');
var router = express.Router();
var mongo = require('mongo');
var models = require('../models');

router.get('/', [
  function(req,res,next) {
    models.Hotel.find(function(err,hotels) {
      req.hotels = hotels;
      next();
    });
  },
  function(req,res,next) {
    models.Restaurant.find(function(err,restaurants) {
      req.restaurants = restaurants;
      next();
    });
  },
  function(req,res,next) {
    models.ThingsToDo.find(function(err,thingsToDo) {
      res.render("index",{
        thingsToDo:thingsToDo,
        restaurants:req.restaurants,
        hotels:req.hotels
      });
    });
  }
]);

module.exports = router;