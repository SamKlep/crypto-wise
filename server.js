const express = require('express')
const app = express()
const axios = require('axios')
const colors = require('colors')

app.use(express.static('public'))

const PORT = process.env.PORT || 5000

app.get('/', function (request, response) {
  response.send('hello')
})

app.get('/prices', function (request, response) {
  axios
    .get('https://api.nomics.com/v1/prices?key=' + process.env.NOMICS_API_KEY)
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
