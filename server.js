const express = require('express')
const path = require('path')
const port = 8080
const app = express()

app.use(express.static(__dirname + '/public'))

app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(port)
