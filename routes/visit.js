var mongoose = require('mongoose');
var router = express.Router();
var models = require('../models');
var visit = require('./routes/visit');
app.use('/visit', visit);

// router.get('/', function(req,res) {
//     res.render('create');
//     });

router.post('/create', function(req, res) {
  models.visit.create({"attraction_id": req.body.attraction_id, "attraction_type": req.body.attraction_type, "day_number": req.body.day_number}; {
      req.visit = visit;
      var p = models.visit({"_attraction": req.body.attraction_id, "attraction_type": req.body.attraction_type, "day_number": req.body.day_number});
        p.save(function(err,visit) {
          res.json(visit);
      }
    };
  });
});

//ADD ROUTE-------------------------------------------
// router.get('/', function(req, res) {
//   res.render('submit');
// })

router.post('/submit', function(req, res) {
  var p = new models.visit.create({"_attraction": req.body.attraction_id, "attraction_type": req.body.attraction_type, "day_number": req.body.day_number});
  p.save(function(err,visit) {
    res.json(visit);
  });
})



module.exports = router;