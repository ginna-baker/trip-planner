 // var visit = new Visit({
  //   attraction_id: {{_attraction | json}},
  //   attraction_type: {{attraction_type | json}},
  //   day_number: {{day_number | json}}
  // });

  var Data = function(bootstrap) {
    for(key in bootstrap) {
      if(bootstrap.hasOwnProperty(key)) {
        this[key] = bootstrap[key];
      }
    }
  };

  Data.prototype.findById = function(type,id) {
    for(var i = 0; i < this[type].length; i++) {
      if(this[type][i]._id === id) {
        return this[type][i];
      }
    }
  }

  var VisitLog = function(bootstrap) {
    for(key in bootstrap) {
      if(bootstrap.hasOwnProperty(key)) {
        this[key] = bootstrap[key];
      }
    }
  };

  VisitLog.prototype.findById = function(type,id) {
    for(var i = 0; i < this[type].length; i++) {
      if(this[type][i]._id === id) {
        return this[type][i];
      }
    }
  }


  var data = new Data({
    hotels: {{hotels | json}},
    thingsToDo: {{thingsToDo | json}},
    restaurants: {{restaurants | json}}
  });

  var visitLog = new VisitLog({
    attraction_id: {{attraction_id | json}},
    attraction_type: {{type_of_place | json}},
    day_number: {{current_day | json}},
  })

  var map;
  var mapInit = function() {
    // initialize new google maps LatLng object
    var myLatlng = new google.maps.LatLng(40.705786,-74.007672);

    // set the map options hash
    var mapOptions = {
      center: myLatlng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    // get the maps div's HTML obj
    var map_canvas_obj = document.getElementById("map-canvas");

    // initialize a new Google Map with the options
    map = new google.maps.Map(map_canvas_obj, mapOptions);

    // Add the marker to the map
    // var marker = new google.maps.Marker({
    //   position: myLatlng,
    //   title:"Hello World!"
    // });

    // Add the marker to the map by calling setMap()
    // marker.setMap(map);
  };

  mapInit();

  var selectors = {
    hotels: $("#hotel-select"),
    thingsToDo: $("#thingsToDo-select"),
    restaurants: $("#restaurants-select")
  };

  var days = [];
  var currentDay;
  var $daysContainer = $("#daysContainer");
  var $dayPanel = $('#day-panel');
  var cancellations = [];

  var arrToUl = function(arr, day) {
    var toReturn = "<ul>";
    arr.forEach(function(el) {
      toReturn += "<li>'" + el.name + "'<span data-activity-id='" + el._id + "' data-day-num='" + day.number + "' class='glyphicon glyphicon-remove'>" + "</span>" + "</li>";
    });
    return toReturn + "</ul>"  };



  $('.glyphicon-remove').on('click', function() {
      cancellations.push$(this).parents('li').text()
      $(this).parents('li').hide();
      return cancellations;
  })

  var Markers = new MarkerCollection();

  var setMarkers = function(locations) {
    locations.forEach(function(location) {
      Markers.place(location);
    });
  };

  var getLocationsForDay = function(day) {
    var locations = [];
    ['hotels','restaurants','thingsToDo'].forEach(function(type) {
      day[type].forEach(function(activity) {
        locations.push(activity.place[0].location);
      });
    });
    return locations;
  };

  var DayPlanView = function (day) {
    this.day = day;
    this.render();
  }

  DayPlanView.prototype.render = function() {
    var str = "<div><h3>Plan for day " + this.day.number + "</h3>";
    str += "Hotels" + arrToUl(this.day.hotels,this.day)
    str += "Restaurants" + arrToUl(this.day.restaurants,this.day)
    str += "Things to do" + arrToUl(this.day.thingsToDo,this.day)
    this.$el = $(str);
  };

  var DayButtonView = function(day) {
    this.day = day;

    this.$el = $("<button class='btn'>Day " + this.day.number + "</button>");

    $daysContainer.append(this.$el);

    var self = this;

    this.$el.on('click',function() {
      $.get("/day/" + self.number, function (res) {
        $dayPanel.html(res);
        deleteVisit();
        // $dayPanel.append();
      })
      Markers.clearMap();
      setMarkers(getLocationsForDay(self.day));
      self.day.activate();
      currentDay = self.day;
    });
  };

  var Day = function() {
    this.hotels = [];
    this.restaurants = [];
    this.thingsToDo = [];
    this.number = days.length + 1;
    this.buttonView = new DayButtonView(this);
    this.dayPlanView = new DayPlanView(this);
  };

  Day.prototype.activate = function() {
    currentDay = this;
    this.dayPlanView.render();
    $dayPanel.html(this.dayPlanView.$el);
    $dayPanel.append();
  }
;
  Day.prototype.addActivity = function(type,id) {

  };

  var addDay = function() {
    var dayObj = new Day();
    days.push(dayObj);
  };

  addDay();

  $("#addDay").on('click',function() {
    addDay();
  });

var attraction_id, attraction_type;

  //adding things with places
  $(".add-place").on('click',function() {
    var place = $(this).attr('data-place');
    var selector = selectors[place];
    var id = selector.val();
    if(typeof currentDay !== 'undefined') {
      var activity = data.findById(place,id);
      Markers.place(activity.place[0].location);
      currentDay[place].push(activity);
      currentDay.activate();
      writeVisitToServer(id, currentDay.number, place);
    }
  });



  var initSelectors = function() {
    var optionFactory = function(obj) {
      return "<option value='" + obj._id + "'>" + obj.name + "</option>";
    };

    var selectAppender = function($select,obj) {
      $select.append(optionFactory(obj));
    };

    for(var type in data) {
      if(data.hasOwnProperty(type)) {
        data[type].forEach(function(obj) {
          selectAppender(selectors[type],obj);
        });
      }
    }
  };

  initSelectors();

  // ___________DELETE VISIT FROM SERVER______________________________
function deleteVisit(cancellations) {
  visitLog.remove({
    match: {'el._id': attraction_id}
  }, function(err, removed) {
    console.log(removed);
  }
  )}

  // the callback function below will be called if this request completes successfully.
  // the server's response to this request is passed into this callback function as "responseData"

  var post_callback = function (responseData) {
  };

  // jQuery Ajax call
  $.post("/visit/delete", deleteVisit(), post_callback);

//_____________WRITE VISIT TO SERVER____________

function writeVisitToServer(attraction_id, current_day, type_of_place) {
  var post_data = {
    attraction_id: attraction_id,
    attraction_type: type_of_place,
    day_number: current_day
  };

  // the callback function below will be called if this request completes successfully.
  // the server's response to this request is passed into this callback function as "responseData"

  var post_callback = function (responseData) {
  };

  // jQuery Ajax call
  $.post("/visit/create", post_data, post_callback);

}