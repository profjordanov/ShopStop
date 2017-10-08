const http = require('http')
const config = require('./config/config')
const database = require('./config/database.config')
const port = 3003
const handlers = require('./handlers')

let environment = process.env.NODE_environment || 'development'

database(config[environment])

http.createServer((req,res)=>{
  for(let handler of handlers){
    if(!handler(req,res)){
      break
    }
  }
}).listen(port)