const homeHandler = require('./home')
const productsHandler = require('./product')
const categoryHandler = require('./category')

module.exports = {
  home: homeHandler,
  product: productsHandler,
  category: categoryHandler
}