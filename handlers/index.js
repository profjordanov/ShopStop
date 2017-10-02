const homeHandler = require('./home')
const fileshandler = require('./static-files')
const products = require('./product')

module.exports = [homeHandler, fileshandler,products]