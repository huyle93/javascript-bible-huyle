apiKey = 'plNOfI4m8eLRGut1GFQ8k01VjNKA5UzI'
let request = require('request')

let options = {
  "url": "https://apis.solarialabs.com/shine/v1/vehicle-stats/fuel-usage",
  "method": "GET",
  "qs": {
    "make": "",
    "car-truck": "truck",
    "apikey": apiKey
  }
}
// Parse JSON data
request(options,(err,resp,body)=>{
    var data = JSON.parse(body)
    for(var i = 0; i < 10; i++) {
        console.log(data[i].Model, data[i].Manufacturer , data[i].City_Conventional_Fuel, data[i].Hwy_Conventional_Fuel, (data[i].City_Conventional_Fuel+data[i].Hwy_Conventional_Fuel)/2);
       }
})