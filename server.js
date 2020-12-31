const express = require('express')
const app = express()
const axios = require('axios')
const colors = require('colors')
const dotenv = require('dotenv')

// Load env vars
dotenv.config()

app.use(express.static('public'))

const PORT = process.env.PORT || 5000

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
      console.log('Error fetching data from nomics', err)
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
      console.log('Error fetching data from nomics', err)
    })
})

app.get('/stock', function (request, response) {
  axios
    .get(
      `https://cloud.iexapis.com/stable/tops?token=${process.env.STOCK_API_KEY}&symbols=aapl,msft,amzn,goog,fb,nflx,tsla`
    )

    .then((resp) => {
      response.send(resp.data)
    })
    .catch((err) => {
      console.log('Error fetching data from nomics', err)
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
