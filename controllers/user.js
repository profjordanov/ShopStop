const User = require('../models/User')
const encryption = require('../utilities/encryption')

module.exports.registerGet = (req, res) => {
  res.render('user/register')
}

module.exports.registerPost = (req, res) =>{
  let user = req.body

  if(user.password && user.password !== user.confirmedPassword){
    user.error = 'Password do not match.'
    res.render('user/register', user)
    return
  }

  let salt = encryption.generateSalt()
  user.salt = salt

  if(user.password){
    let hashedPassword = encryption.generateHashedPassword(salt, user.password)
    user.password = hashedPassword
  }

  user.create(user)
    .then(user =>{
      req.logIn(user, (error, user) =>{
        if(error){
          res.render('users/register', {error: 'Authentication not working!'})
          return
        }

        res.redirect('/')
      })
    })
    .catch(error =>{
      //User.create fails
      user.error = error
      res.render('user/register', user)
    })
}