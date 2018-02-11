var https = require('https');
var address = 'New Jersey';
httpsGet(address, (myResult) => {
    console.log("sent     : " + address);
    console.log("received : " + myResult);

    //this.response.speak('The population of ' + myRequest + ' is ' + myResult);
    //this.emit(':responseReady');

});

function httpsGet(myData, callback) {

    // GET is a web service request that is fully defined by a URL string
    // Try GET in your browser:
    // https://cp6gckjt97.execute-api.us-east-1.amazonaws.com/prod/stateresource?usstate=New%20Jersey


    // Update these options with the details of the web service you would like to call
    var options = {
        host: 'cp6gckjt97.execute-api.us-east-1.amazonaws.com',
        port: 443,
        path: '/prod/stateresource?usstate=' + encodeURIComponent(myData),
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

            var pop = JSON.parse(returnData).population;

            callback(pop);  // this will execute whatever function the caller defined, with one argument

        });

    });
    req.end();

}