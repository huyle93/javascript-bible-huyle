apiKey = "yourkey"
var _ = require('lodash');
var parseGeocoder = require('parse-geocoder');
let request = require('request')
let options = {
  "url": "https://maps.googleapis.com/maps/api/geocode/json",
  "method": "GET",
  "qs": {
    "address": "2 Old English Village, Dover, NH",
    "key": apiKey
  }
}

request(options,(err,resp,body)=>{
  //var data = JSON.parse(body)
  //console.log(body);
  var result = parseGeocoder.parseResult(body);
  console.log(result);    
})