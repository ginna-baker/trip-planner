var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tripplanner');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

var Visit, Place, Hotels, ThingsToDo, Restaurants;
var Schema = mongoose.Schema;

var placeSchema = new Schema({
  address: String,
  city: String,
  state: String,
  phone: String,
  location: [Number, Number]// mongoose geospatial, long and lat
});

var hotelsSchema = new Schema({
  name: String,
  place: [placeSchema],
  num_stars: Number, //1-5
  amenities: String //comma delimited list
});

var thingsToDoSchema = new Schema({
  name: String,
  place: [placeSchema],
  age_range: String //(data-type string)
})

var restaurantsSchema = new Schema({
  name: String,
  place: [placeSchema],
  cuisine: String,
  price: Number // (integer from 1-5 for how many dollar signs)
})

// var userSchema = new Schema({
//   name:  {
//       first: String,
//       last: String
//     },
//   email: String
// });
var visitSchema = new Schema({
  _attraction: Schema.Types.ObjectId,
  attraction_type: String,
  day_number: Number
})

Visit = mongoose.model('Visit', visitSchema);
Place = mongoose.model('Place', placeSchema);
Hotels = mongoose.model('Hotels', hotelsSchema);
ThingsToDo = mongoose.model('ThingsToDo', thingsToDoSchema);
Restaurants = mongoose.model('Restaurants', restaurantsSchema);

module.exports = {"Visit": Visit, "Place": Place, "Hotels": Hotels, "ThingsToDo": ThingsToDo, "Restaurants": Restaurants};