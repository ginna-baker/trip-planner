var MarkerCollection = function() {
  this.pool = [];
  this.markers = [];
};

MarkerCollection.prototype.create = function(LatLng) {
  var marker = new google.maps.Marker({
    position:new google.maps.LatLng(LatLng[0],LatLng[1])
  });

  this.markers.push(marker);

  marker.setMap(map);
};

MarkerCollection.prototype.pull = function(LatLng) {
  var marker = this.pool.pop();
  this.markers.push(marker);
  marker.setPosition(new google.maps.LatLng(LatLng[0],LatLng[1]));
  marker.setMap(map);
};

MarkerCollection.prototype.place = function(LatLng) {
  console.log('place gets called');
  if(this.pool.length > 0) {
    this.pull(LatLng)
  } else {
    this.create(LatLng)
  }
};

MarkerCollection.prototype.clearMap = function() {
  console.log('clear called');
  console.log('pool length',this.pool.length);
  console.log('markers length',this.markers.length);
  while(this.markers.length > 0) {
    var marker = this.markers.pop();
    marker.setMap(null);
    this.pool.push(marker);
  }
  console.assert(this.markers.length === 0, "there are no markers on the map");
}