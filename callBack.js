var express = require("express");
import { config } from './config';
// var https = require('https');

// var getGeocode = function (address) {
//     const geocodeApikey = config.key;
//     //const geocodeApikey = ''
//     var lat;
//     var long;
//     var body = ''
//     var endpoint = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${geocodeApikey}`;
//     https.get(endpoint, (response) => {
//         response.on('data', (chunk) => {
//             body += chunk;
//         });
//         response.on('end', () => {
//             var data = JSON.parse(body);
//             // either using JSON.stringtify or Number() to parse from Google API
//             lat = Number(data.results[0].geometry.location.lat)
//             long = Number(data.results[0].geometry.location.lng)
//         });
//     });
//     return lat
// }
// console.log(getGeocode('Boston University, Boston MA'))

console.log(config.key)