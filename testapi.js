const settings = {
  async: true,
  crossDomain: true,
  url: 'https://community-open-weather-map.p.rapidapi.com/weather?q=Jakarta%2Cid&lat=0&lon=0',
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
    'X-RapidAPI-Key': '146a728f80msh707b8beadf77153p17b338jsnfc9eaef75d64',
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
  var iconcode = response.weather[0].icon;
  var iconurl = 'http://openweathermap.org/img/w/' + iconcode + '.png';
  $('#wicon').attr('src', iconurl);
  $('#wheader').html(response.weather[0].main);
  var temp = response.main.temp - 273;
  temp = temp.toFixed(2) + '&deg;';
  $('#wtemp').html(temp);
  $('#wdescription').html(response.weather[0].description);
});
