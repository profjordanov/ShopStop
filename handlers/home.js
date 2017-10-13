const Product = require('../models/Product')

module.exports.index = (req, res) => {
  let qsData = req.query

  Product
    .find()
    .populate('category')
    .then((products) => {
      if (qsData.query) {
        products = products
          .filter(p => p.name.toLowerCase().includes(qsData.query))
      }

      let data = {products: products}
      if (req.query.error) {
        data.error = req.query.error
      } else if (req.query.success) {
        data.success = req.query.success
      }

      res.render('home/index', data)

    }).catch((err) => {
    console.log(err)
  })
}