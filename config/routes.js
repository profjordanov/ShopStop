const controllers = require('../controllers')
const multer = require('multer')
const auth = require('./auth')

let upload = multer({dest: './content/images'})

module.exports = (app) =>{
  app.get('/', controllers.home.index)

  app.get('/product/add', auth.isAuthenticated ,controllers.product.addGet)
  app.post('/product/add', auth.isAuthenticated ,upload.single('image'), controllers.product.addPost)

  app.get('/product/edit/:id', controllers.product.editGet)
  app.post('/product/edit/:id', upload.single('image'), controllers.product.editPost)

  app.get('/product/delete/:id', controllers.product.deleteGet)
  app.post('/product/delete/:id', controllers.product.deletePost)

  app.get('/product/buy/:id',auth.isAuthenticated , controllers.product.buyGet)
  app.post('/product/buy/:id',auth.isAuthenticated , controllers.product.buyPost)


  app.get('/category/add', auth.isInRole('Admin'), controllers.category.addGet)
  app.post('/category/add', auth.isInRole('Admin'),controllers.category.addPost)

  app.get('/category/:category/products', controllers.category.productByCategory)

  app.get('/user/register', controllers.user.registerGet)
  app.post('/user/register', controllers.user.registerPost)

  app.get('/user/login', controllers.user.loginGet)
  app.post('/user/login', controllers.user.loginPost)

  app.post('/user/logout', controllers.user.logout)
}