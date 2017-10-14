const controllers = require('../controllers')
const multer = require('multer')

let upload = multer({dest: './content/images'})

module.exports = (app) =>{
  app.get('/', controllers.home.index)

  app.get('/product/add', controllers.product.addGet)
  app.post('/product/add', upload.single('image'), controllers.product.addPost)

  app.get('/product/edit/:id', controllers.product.editGet)
  app.post('/product/edit/:id', upload.single('image'), controllers.product.editPost)

  app.get('/product/delete/:id', controllers.product.deleteGet)
  app.post('/product/delete/:id', controllers.product.deletePost)

  app.get('/product/buy/:id', controllers.product.buyGet)


  app.get('/category/add', controllers.category.addGet)
  app.post('/category/add', controllers.category.addPost)

  app.get('/category/:category/products', controllers.category.productByCategory)

  app.get('/user/register', controllers.user.registerGet)
  app.post('/user/register', controllers.user.registerPost)

}