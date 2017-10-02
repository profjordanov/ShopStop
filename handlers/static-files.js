const fs = require('fs')
const path = require('path')
const url = require('url')

function getContentType (pathname) {
  //TODO:This here
  if(pathname.endsWith('.css')){
    return 'text/css'
  }
  else if(pathname.endsWith('.jpg')){
    return 'image/jpeg'
  }
}

module.exports = (req,res) => {
  req.pathname = req.pathname || url.parse(req.url).pathname

  if(req.pathname.startsWith('/content/') && req.method === 'GET'){
    let filePath = path.normalize(
      path.join(__dirname,`..${req.pathname}`))

    fs.readFile(filePath,(err,data)=>{
      if(err){
        res.WriteHead(404,{
          'Content-Type':'text/plain'
        })
        res.write('resourse not found!')
        res.end()
        return
      }

      res.writeHead(200, {
        'Content-Type':getContentType(req.pathname)
      })
      res.write(data)
      res.end()
    })
  }else{
    return true
  }
}