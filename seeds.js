// This file should contain all the record creation needed to seed the database with its default values.
// The data can then be loaded with the node seeds.js

models = require('./models');
var Place = models.Place,
    Hotel = models.Hotel,
    Restaurant = models.Restaurant,
    ThingsToDo = models.ThingsToDo;

var mongoose = require('mongoose');
console.log("Inserting data");

var place = new Place({address: "75 Wall St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.705137, -74.007624]});
Hotel.create({name: "Andaz Wall Street", place: [place], num_stars: 4, amenities: "Pool, Free Wi-Fi" });

var place = new Place({address: "52 Mulberry St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.715317, -73.999542]});
Hotel.create({name: "Hotel Mulberry", place: [place], num_stars: 4.5, amenities: "Free Wi-Fi" });

var place = new Place({address: "Two West Street", city: "New York", state: "NY", phone: "123-456-7890", location: [40.705417, -74.017241]});
Hotel.create({name: "The Ritz-Carlton New York, Battery Park", place: [place], num_stars: 4.5, amenities: "24 hour Gym, Paid Wi-Fi" });

var place = new Place({address: "9 S William St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.704581, -74.010273]});
Hotel.create({name: "Wall Street Inn", place: [place], num_stars: 4, amenities: "Free Wi-Fi" });

var place = new Place({address: "85 West Broadway", city: "New York", state: "NY", phone: "123-456-7890", location: [40.715076, -74.009301]});
Hotel.create({name: "Smyth TriBeCa", place: [place], num_stars: 3.5, amenities: "24 hour Gym" });

var place = new Place({address: "8 Stone St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.703961, -74.012350]});
Hotel.create({name: "Double Tree", place: [place], num_stars: 3.5, amenities: "24 hour Gym" });

var place = new Place({address: "91 E Broadway", city: "New York", state: "NY", phone: "123-456-7890", location: [40.713427, -73.993624]});
Hotel.create({name: "Hotel 91", place: [place], num_stars: 3.5, amenities: "Free Wi-Fi" });

var place = new Place({address: "102 N End Ave", city: "New York", state: "NY", phone: "123-456-7890", location: [40.714985, -74.015841]});
Hotel.create({name: "Conrad New York Hotel", place: [place], num_stars: 3.5, amenities: "Paid Wi-Fi, Dogs Allowed" });

var place = new Place({address: "55 Church St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.711597, -74.010392]});
Hotel.create({name: "Millenium Hilton Hotel", place: [place], num_stars: 3.5, amenities: "Paid Wi-Fi" });

var place = new Place({address: "106 Bowery", city: "New York", state: "NY", phone: "123-456-7890", location: [40.717873, -73.995231]});
Hotel.create({name: "US Pacific Hotel", place: [place], num_stars: 2, amenities: "Accepts Credit Cards" });

var place = new Place({address: "15 Gold Street", city: "New York", state: "NY", phone: "123-456-7890", location: [40.707894, -74.007108]});
Hotel.create({name: "Gild Hall, a Thompson Hotel", place: [place], num_stars: 4, amenities: "Paid Wi-Fi" });

var place = new Place({address: "123 Washington Street", city: "New York", state: "NY", phone: "123-456-7890", location: [40.709102, -74.013997]});
Hotel.create({name: "W New York", place: [place], num_stars: 3.5, amenities: "Pool, 24 hour Gym, Paid Wi-Fi" });

var place = new Place({address: "85 W St at Albany St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.731131, -73.989568]});
Hotel.create({name: "New York Marriott Downtown", place: [place], num_stars: 3.5, amenities: "24 hour Gym, Paid Wi-Fi" });

var place = new Place({address: "95 W Broadway", city: "New York", state: "NY", phone: "123-456-7890", location: [40.715681, -74.008922]});
Hotel.create({name: "Cosmopolitan Hotel", place: [place], num_stars: 3.5, amenities: "Free Wif-Fi" });

var place = new Place({address: "140 Washington St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.709630, -74.013940]});
Hotel.create({name: "Club Quarters", place: [place], num_stars: 4, amenities: "Free Wif-Fi" });



var place = new Place({address: "75 Wall St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.705137, -74.013940]});
Restaurant.create({name: "Bouley", place: [place], cuisine: "French", price: 4});

var place = new Place({address: "134 Reade St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.716526, -74.009567]});
Restaurant.create({name: "Marc Forgione", place: [place], cuisine: "Seafood", price: 3});

var place = new Place({address: "99 Hudson St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.718977, -74.008929]});
Restaurant.create({name: "Tamarind", place: [place], cuisine: "Indian", price: 3});

var place = new Place({address: "16 Mott St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.714230, -73.998509]});
Restaurant.create({name: "Hop Lee Restaurant", place: [place], cuisine: "Chinese", price: 2});

var place = new Place({address: "2 Harrison St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.718679, -74.008900]});
Restaurant.create({name: "Jungsik", place: [place], cuisine: "Korean", price: 4});

var place = new Place({address: "120 Broadway", city: "New York", state: "NY", phone: "123-456-7890", location: [40.708475, -74.010846]});
Restaurant.create({name: "The Capital Grille", place: [place], cuisine: "Steakhouses, American", price: 4});

var place = new Place({address: "128 E 7th St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.726096, -73.984152]});
Restaurant.create({name: "Pylos", place: [place], cuisine: "Greek", price: 3});

var place = new Place({address: "9 Pell St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.714601, -73.997761]});
Restaurant.create({name: "Joe's Shanghai", place: [place], cuisine: "Shanghainese, Dim Sum", price: 2});

var place = new Place({address: "79 Orchard St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.717719, -73.990565]});
Restaurant.create({name: "Cafe Katja", place: [place], cuisine: "German, Austrian", price: 2});

var place = new Place({address: "141 Duane St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.716403, -74.007724]});
Restaurant.create({name: "Rosanjin", place: [place], cuisine: "Japanese", price: 3});

var place = new Place({address: "60 Thompson St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.724014, -74.003242]});
Restaurant.create({name: "Kittichai", place: [place], cuisine: "Thai", price: 4});

var place = new Place({address: "5 Bleecker St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.725495, -73.992662]});
Restaurant.create({name: "Bianca Restaurant", place: [place], cuisine: "Italian", price: 2});

var place = new Place({address: "165 Allen St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.721266, -73.989756]});
Restaurant.create({name: "Rayuela", place: [place], cuisine: "Spanish, Latin American", price: 3});

var place = new Place({address: "39 Downing St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.729269, -74.003875]});
Restaurant.create({name: "Mas Farmhouse", place: [place], cuisine: "New American, French", price: 4});

var place = new Place({address: "86 Mulberry St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.716544, -73.998626]});
Restaurant.create({name: "Xe Lua", place: [place], cuisine: "Vietnamese", price: 1});



var place = new Place({address: "133 Canal St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.716291, -73.995315]});
ThingsToDo.create({name: "Mahayana Temple Buddhist Association", place: [place], age_range: "All" });

var place = new Place({address: "19 Fulton St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.707119, -74.003602]});
ThingsToDo.create({name: "South Street Seaport", place: [place], age_range: "All" });

var place = new Place({address: "1 Liberty Plz Lbby 2", city: "New York", state: "NY", phone: "123-456-7890", location: [40.709329, -74.013120]});
ThingsToDo.create({name: "Ground Zero", place: [place], age_range: "All" });

var place = new Place({address: "1 Albany St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.709189, -74.013157]});
ThingsToDo.create({name: "National September 11th Memorial & Museum", place: [place], age_range: "All" });

var place = new Place({address: "State St & Battery Pl", city: "New York", state: "NY", phone: "123-456-7890", location: [40.704531, -74.014334]});
ThingsToDo.create({name: "Battery Park", place: [place], age_range: "All" });

var place = new Place({address: "4 S St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.729125, -73.989650]});
ThingsToDo.create({name: "Staten Island Ferry Whitehall Terminal", place: [place], age_range: "All" });

var place = new Place({address: "65 Bayard St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.715323, -73.998190]});
ThingsToDo.create({name: "Chinatown Ice Cream Factory", place: [place], age_range: "All" });

var place = new Place({address: "434 Lafayette St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.729373, -73.992104]});
ThingsToDo.create({name: "Blue Man Group", place: [place], age_range: "All" });

var place = new Place({address: "244 5th Ave", city: "New York", state: "NY", phone: "123-456-7890", location: [40.744610, -73.987708]});
ThingsToDo.create({name: "Scott's Pizza Tours", place: [place], age_range: "All" });

var place = new Place({address: "103 Prince St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.724918, -73.999144]});
ThingsToDo.create({name: "Apple Store", place: [place], age_range: "All" });

var place = new Place({address: "Pier 1", city: "New York", state: "NY", phone: "123-456-7890", location: [40.702225, -73.996563]});
ThingsToDo.create({name: "Brooklyn Bridge Park", place: [place], age_range: "All" });

var place = new Place({address: "Ellis Island", city: "New York", state: "NY", phone: "123-456-7890", location: [40.699297, -74.040317]});
ThingsToDo.create({name: "Ellis Island Immigration Museum", place: [place], age_range: "All" });

var place = new Place({address: "1 Washington Sq E", city: "New York", state: "NY", phone: "123-456-7890", location: [40.732204, -73.998649]});
ThingsToDo.create({name: "Washington Square Park", place: [place], age_range: "All" });

var place = new Place({address: "Union Sq & W 14th St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.733615, -73.987995]});
ThingsToDo.create({name: "Union Square Holiday Market", place: [place], age_range: "All" });

var place = new Place({address: "828 Broadway", city: "New York", state: "NY", phone: "123-456-7890", location: [40.733274, -73.990870]});
ThingsToDo.create({name: "Strand Bookstore", place: [place], age_range: "All" });

console.log("Finished inserting data");
console.log("Control-C to quit");