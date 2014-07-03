var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tripplanner');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

var Place, Hotel, ThingsToDo, Restaurant;
var Schema = mongoose.Schema;

var placeSchema = new Schema({
  address: String,
  city: String,
  state: String,
  phone: String,
  location: [Number, Number]// mongoose geospatial, long and lat
});

var hotelSchema = new Schema({
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

var restaurantSchema = new Schema({
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

Place = mongoose.model('Place', placeSchema);
Hotel = mongoose.model('Hotel', hotelSchema);
ThingsToDo = mongoose.model('ThingsToDo', thingsToDoSchema);
Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = {"Place": Place, "Hotel": Hotel, "ThingsToDo": ThingsToDo, "Restaurant": Restaurant};