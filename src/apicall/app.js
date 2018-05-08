var https = require('https')
//nodemon
//node js
key = ''
var symbol = 'bitcoin'
var endpoint = `https://api.coinmarketcap.com/v1/ticker/${symbol}/`
var body = ""
https.get(endpoint, (response) => {
  response.on('data', (chunk) => {
    body += chunk
  })
  response.on('end', () => {
    var data = JSON.parse(body)
    var cryptoPrice = Math.ceil(data[0].price_usd)
    var pricechange = data[0].percent_change_1h
    console.log(body)
    console.log(`${symbol}'s price is: ${cryptoPrice}, percent change: ${pricechange}`)
  })
})