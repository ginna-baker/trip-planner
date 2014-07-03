function initialize() {

  // initialize new google maps LatLng object
        var mapOptions = {
          center: new google.maps.LatLng(-34.397, 150.644),
          zoom: 8,
          mapTypeId:google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
      }
      google.maps.event.addDomListener(window, 'load', initialize);

  // get the maps div's HTML obj
  var map_canvas_obj = document.getElementById("map-canvas");

  // initialize a new Google Map with the options
  var map = new google.maps.Map(map_canvas_obj, mapOptions);

  // Add the marker to the map
  var marker = new google.maps.Marker({
    position: myLatlng,
    title:"myLatlng"
  });

  // Add the marker to the map by calling setMap()
  marker.setMap(map);
}