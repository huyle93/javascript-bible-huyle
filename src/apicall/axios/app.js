const axios = require('axios');
var fs = require('fs');
// // // GET request for remote image
// axios({
//         method: 'get',
//         url: 'http://bit.ly/2mTM3nY',
//         responseType: 'stream'
//     })
//     .then(function (response) {
//         response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
//     });

// // GET JSON object from https://s3.amazonaws.com/hjhcapstone/data.json
axios({
    method: 'get',
    url: 'https://s3.amazonaws.com/hjhcapstone/data.json',
    responseType: 'json'
})
.then(function (response) {
    var data;
    function x () {
        data = response.data;
        return data;
    }
    console.log(x());
});