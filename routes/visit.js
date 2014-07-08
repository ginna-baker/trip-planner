var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var models = require('../models');

// router.get('/', function(req,res) {
//     res.render('create');
//     });

router.post('/create', function(req, res) {
  var docObject = {
    "_attraction": req.body.attraction_id,
    "attraction_type": req.body.attraction_type,
    "day_number": req.body.day_number
  };

  console.log(docObject);

  models.Visit.create(docObject,function(err,visit) {
    console.log(arguments);
      res.json(visit);

  });
});

router.post('/delete', function(req, res)
  remove(req);
  )

//ADD ROUTE-------------------------------------------
// router.get('/', function(req, res) {
//   res.render('submit');
// })



module.exports = router;