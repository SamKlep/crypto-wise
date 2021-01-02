const express = require('express')
const app = express()
const axios = require('axios')
const colors = require('colors')
const dotenv = require('dotenv')

// Load env vars
dotenv.config()

app.use(express.static('public'))

const PORT = process.env.PORT || 5000

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build')) // serve the static react app
  app.get(/^\/(?!api).*/, (req, res) => {
    // don't serve api routes to react app
    res.sendFile(path.join(__dirname, './frontend/build/index.html'))
  })
  console.log('Serving React App...')
}

app.get('/', function (request, response) {
  response.send('hello')
})

app.get('/prices', function (request, response) {
  axios
    .get(
      `https://min-api.cryptocompare.com/data/top/totalvolfull?tsym=USD&${process.env.CRYPTOCOMPARE_API_KEY}`
    )

    .then((resp) => {
      response.send(resp.data)
    })
    .catch((err) => {
      console.log('Error fetching data from CryptoCompare', err)
    })
})

app.get('/price', function (request, response) {
  axios
    .get(
      `https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD&${process.env.CRYPTOCOMPARE_API_KEY}`
    )

    .then((resp) => {
      response.send(resp.data)
    })
    .catch((err) => {
      console.log('Error fetching data from CryptoCompare', err)
    })
})

app.get('/news', function (request, response) {
  axios
    .get(
      `https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=${process.env.CRYPTOCOMPARE_API_KEY}`
    )

    .then((resp) => {
      response.send(resp.data)
    })
    .catch((err) => {
      console.log('Error fetching data from CryptoCompare', err)
    })
})

app.get('/stocks', function (request, response) {
  axios
    .get(
      `https://cloud.iexapis.com/stable/stock/market/collection/sector?collectionName=Technology&token=${process.env.STOCK_API_KEY}`
    )

    .then((resp) => {
      response.send(resp.data)
    })
    .catch((err) => {
      console.log('Error fetching data from IEX', err)
    })
})

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red)
  // Close server & exit process
  server.close(() => process.exit(1))
})
