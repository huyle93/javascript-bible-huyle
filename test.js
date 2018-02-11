/* var lat = getGeocode(address)[0]
var long = getGeocode(address)[1]
console.log(lat, long) */
var https = require('https');



address = 'Fenway Park'
var geocodeApikey = 'AIzaSyD-8QBhZNxZLnmX2AxBEOB2sSHzg4L2tZs'
var endpoint = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${geocodeApikey}`;
var body = ''
https.get(endpoint, (response) => {
    response.on('data', (chunk) => {
        body += chunk;
    });
    response.on('end', () => {
        var data = JSON.parse(body);
        // either using JSON.stringtify or Number() to parse from Google API
        var lat = Number(data.results[0].geometry.location.lat)
        var long = Number(data.results[0].geometry.location.lng)
    });
});

let add = function (address) {
    var geocodeApikey = 'AIzaSyD-8QBhZNxZLnmX2AxBEOB2sSHzg4L2tZs'
    var endpoint = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${geocodeApikey}`;
    var body = ''
    return endpoint
}
let calc = function (address, callback) {
    return callback(
        https.get(add(address), (response) => {
            response.on('data', (chunk) => {
                body += chunk;
            })
            response.on('end', () => {
                var data = JSON.parse(body);
                // either using JSON.stringtify or Number() to parse from Google API
                var lat = Number(data.results[0].geometry.location.lat)
                var long = Number(data.results[0].geometry.location.lng)
            })
        })
    )

}
console.log(calc(address, add))

/* function foo(address, callback) {
    var geocodeApikey = 'AIzaSyD-8QBhZNxZLnmX2AxBEOB2sSHzg4L2tZs'
    var endpoint = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${geocodeApikey}`;
    var body = ''
    https.get(endpoint, (response) => {
        response.on('data', (chunk) => {
            body += chunk;
        })
    }, function (results, status) {
        callback(response.on('end', () => {
            var data = JSON.parse(body);
            var lat = Number(data.results[0].geometry.location.lat)
            var long = Number(data.results[0].geometry.location.lng)
        }));
    });
}

foo("boston", function (location) {
    console.log(location); // this is where you get the return value
}); */

/* var options = {
    host: `https://maps.googleapis.com/maps/api/geocode/json`,
    port: 80,
    path: `?address=boston+museum&key=AIzaSyD-8QBhZNxZLnmX2AxBEOB2sSHzg4L2tZs`,
    method: 'POST'
};

https.request(options, function (res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
    });
}).end(); */