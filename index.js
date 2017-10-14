const express = require('express')
const config = require('./config/config')
const database = require('./config/database.config')
const port = 3003
const handlers = require('./controllers')

let app = express()
let environment = process.env.NODE_environment || 'development'

database(config[environment])
require('./config/express')(app, config[environment])
require('./config/routes')(app)
require('./config/passport')()

app.listen(port)

console.log(`Server listening on ${port}..`)