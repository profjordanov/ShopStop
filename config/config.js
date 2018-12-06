const path = require('path')

module.exports = {
  development: {
    connectionString: 'mongodb://shopstopdb:4Hay2T6GJwmmED634Jx0lmoBdZ2bcu1dUgxUlwQqsgxd2jfe7wUhiPBTjQQUhs4xqmhdqjaP7t9Wv2ZJqhA7Hw==@shopstopdb.documents.azure.com:10255/?ssl=true',
    rootPath: path.normalize(path.join(__dirname,'../'))
  },
  production: {

  }
}