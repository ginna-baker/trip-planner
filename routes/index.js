var express = require('express');
var router = express.Router();
var models = require('../models');
var async = require("async");


router.get('/', [
  function(req,res,next) {
    models.Hotels.find(function(err,hotels) {
      req.hotels = hotels;
      next();
    });
  },
  function(req,res,next) {
    models.Restaurants.find(function(err,restaurants) {
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


//
router.get('/day/:day', function(req, res) {
  models.Visit.find({day_number: req.params.day}, function(err, visits) {
    var transformer = function (visit, callback) {
      visit.populate({
        path: '_attraction',
        match: {_id: visit._attraction} ,
        model: visit.attraction_type
      }, callback );
    };

    var masterCallback = function(err,vistis) {
      //visits at this point will be populated
      res.json(visits);
    };

    async.map(visits, transformer, masterCallback);
  });
});


router.get('/data', function(req, res) {
    models.Hotels.find(function(err,hotels) {
      models.ThingsToDo.find(function(err,thingsToDo) {
        models.Restaurants.find(function(err,restaurants) {
          res.json({
            thingsToDo: thingsToDo,
            restaurants: restaurants,
            hotels: hotels});
          });
        });
      });
    });

module.exports = router;