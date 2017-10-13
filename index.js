const express = require('express')
const config = require('./config/config')
const database = require('./config/database.config')
const port = 3003
const handlers = require('./handlers')

let app = express()
let environment = process.env.NODE_environment || 'development'

database(config[environment])
require('./config/express')(app, config[environment])
require('./config/routes')(app)

app.listen(port)

console.log(`Server listening on ${port}..`)