/*
* Widget Weather
* (OpenWeather connector)
*/
'use strict';

/**You need an API KEY from http://openweathermap.org/api (it's FREE)*/

var API_KEY = "YOUR_API_KEY"; 

app.controller('widgetWeatherController', [ "$scope","$rootScope","$http","$compile",
  function ($scope, $rootScope, $http, $compile) {
    $scope.title="Weather";

    //San Francisco
    var newPos = {
        lat: 37.774929, 
        lng: -122.419416
    };

    // Carbonia
    // var newPos = {
    //   lat: 39.164428, 
    //   lng: 8.522885
    // };

    // Milano
    //  var newPos = {
    //   lat: 45.46542, 
    //   lng: 9.18592
    // };

    // var newPos=getPosition();

    $http.get("http://api.openweathermap.org/data/2.5/weather?lat=" + newPos.lat + "&lon=" + newPos.lng + "&appid=" + API_KEY).success(function(data){

      //console.debug('weather json:'+JSON.stringify(data));
      var json = JSON.parse(JSON.stringify(data));
      $scope.temperature = json.main.temp;
      $scope.code = json.weather[0].id;
      $scope.description = json.weather[0].description;
      $scope.location = json.name;

    }).error(function(data){
      console.error("error reading weather");
    });

}]);


/* function getPosition - dynami geolocalization 

function getPosition(){

  //default weather - San Francisco
  var weatherPos = {
    lat: 37.774929, 
    lng: -122.419416
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      weatherPos.lat = position.coords.latitude,
      weatherPos.lng = position.coords.longitude;
      alert("lat:"+ weatherPos.lat +"long:"+weatherPos.lng);

    }, function() {
     console.log('position found');
   });
  } else {
   console.log('Browser does not support Geolocation');
  }

  return weatherPos;
};

*/