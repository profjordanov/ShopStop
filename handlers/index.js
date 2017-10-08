const homeHandler = require('./home')
const fileshandler = require('./static-files')
const products = require('./product')
const category = require('./category')

module.exports = [homeHandler , fileshandler , products , category]