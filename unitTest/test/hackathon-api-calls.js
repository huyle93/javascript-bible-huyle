var https = require('https');
var address = 'Boston Museum';
var myCoordinates = [43.1389480, -70.9370250]
// httpsGet(address, (myResult) => {
//     //console.log("sent     : " + address);
//     var x = myResult[0]
//     var y = myResult[1]
//     httpsGet_Matrix(x, y, (myResult) => {
//         console.log(myResult)
//         make = 'toyota'
//         model = 'camry'
//         year = '2010'
//         httpsGet_CarStats(make, model, year, (stats) => {
//             console.log(stats)
//         })
//     })
// });



function httpsGet(myData, callback) {
    // Update these options with the details of the web service you would like to call
    var options = {
        host: 'maps.googleapis.com',
        port: 443,
        path: `/maps/api/geocode/json?address=${encodeURIComponent(myData)}&key=AIzaSyD-8QBhZNxZLnmX2AxBEOB2sSHzg4L2tZs`,
        method: 'GET',

        // if x509 certs are required:
        // key: fs.readFileSync('certs/my-key.pem'),
        // cert: fs.readFileSync('certs/my-cert.pem')
    };

    var req = https.request(options, res => {
        res.setEncoding('utf8');
        var returnData = "";

        res.on('data', chunk => {
            returnData = returnData + chunk;
        });

        res.on('end', () => {
            // we have now received the raw return data in the returnData variable.
            // We can see it in the log output via:
            // console.log(JSON.stringify(returnData))
            // we may need to parse through it to extract the needed data
            var pop = JSON.parse(returnData);
            var lat = Number(pop.results[0].geometry.location.lat)
            var lng = Number(pop.results[0].geometry.location.lng)
            callback([lat, lng])
            // this will execute whatever function the caller defined, with one argument
        });
    });
    req.end();

}

function httpsGet_Matrix(lat, long, callback) {
    // Update these options with the details of the web service you would like to call
    var options = {
        host: 'maps.googleapis.com',
        port: 443,
        path: `/maps/api/distancematrix/json?units=imperial&origins=${myCoordinates[0]},${myCoordinates[1]}&destinations=${lat}%2C${long}&key=AIzaSyBtVpXAuWlnuC7hicRdzFBzBifYR1evqIY`,
        method: 'GET',

        // if x509 certs are required:
        // key: fs.readFileSync('certs/my-key.pem'),
        // cert: fs.readFileSync('certs/my-cert.pem')
    };

    var req = https.request(options, res => {
        res.setEncoding('utf8');
        var returnData = "";

        res.on('data', chunk => {
            returnData = returnData + chunk;
        });

        res.on('end', () => {
            // we have now received the raw return data in the returnData variable.
            // We can see it in the log output via:
            // console.log(JSON.stringify(returnData))
            // we may need to parse through it to extract the needed data
            var data = JSON.parse(returnData);
            var distance = data.rows[0].elements[0].distance.value;
            var duration = data.rows[0].elements[0].duration.value;
            callback([distance, duration]);
            // this will execute whatever function the caller defined, with one argument
        });
    });
    req.end();

}

function httpsGet_CarStats(make, model, year, callback) {
    // Update these options with the details of the web service you would like to call
    var options = {
        host: 'apis.solarialabs.com',
        port: 443,
        path: `/shine/v1/vehicle-stats/specs?make=${make}&model=${model}&year=${year}&full-data=true&apikey=UKxbxhZYNEiP4spThYCy61bwEhRQXlPb`,
        method: 'GET',

        // if x509 certs are required:
        // key: fs.readFileSync('certs/my-key.pem'),
        // cert: fs.readFileSync('certs/my-cert.pem')
    };

    var req = https.request(options, res => {
        res.setEncoding('utf8');
        var returnData = "";

        res.on('data', chunk => {
            returnData = returnData + chunk;
        });

        res.on('end', () => {
            // we have now received the raw return data in the returnData variable.
            // We can see it in the log output via:
            // console.log(JSON.stringify(returnData))
            // we may need to parse through it to extract the needed data
            var data = JSON.parse(returnData);
            citygas = data[0].City_Conventional_Fuel
            hwygas = data[0].Hwy_Conventional_Fuel
            /* for(var i = 0; i < 4; i++){
                console.log(data[i].Model_Year, data[i].Model, data[i].Model_Type_Index, data[i].Model_Year, data[i].Transmission, data[i].City_Conventional_Fuel,
                    data[i].Hwy_Conventional_Fuel, data[i].Cylinders, data[i].Num_of_Gears, data[i].Annual_Fuel1_Cos_Conventional_Fuel)
            }*/

            callback([citygas, hwygas]);
            // this will execute whatever function the caller defined, with one argument
        });
    });
    req.end();

}
httpsGet_CarTheft('ma', (car) => {
    console.log(car[0], car[1])
})

function httpsGet_CarTheft(state, callback) {
    // Update these options with the details of the web service you would like to call
    // this will return top 3rd that got stolen
    var options = {
        host: 'apis.solarialabs.com',
        port: 443,
        path: `/shine/v1/vehicle-thefts?state=${state}&rank=1&apikey=UKxbxhZYNEiP4spThYCy61bwEhRQXlPb`,
        method: 'GET',

        // if x509 certs are required:
        // key: fs.readFileSync('certs/my-key.pem'),
        // cert: fs.readFileSync('certs/my-cert.pem')
    };
    var req = https.request(options, res => {
        res.setEncoding('utf8');
        var returnData = "";

        res.on('data', chunk => {
            returnData = returnData + chunk;
        });

        res.on('end', () => {
            // we have now received the raw return data in the returnData variable.
            // We can see it in the log output via:
            // console.log(JSON.stringify(returnData))
            // we may need to parse through it to extract the needed data
            var data = JSON.parse(returnData);
            //carArray.push(data[0].Make)
            var make = data[0].Make
            var model = data[0].Model
            // this will execute whatever function the caller defined, with one argument
            callback([make, model]);
        });
    });
    req.end();

}