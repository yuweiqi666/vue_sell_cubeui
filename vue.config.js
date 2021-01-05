const apiData = require('./data.json')
module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        import: [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  devServer: {
    before(app) {
      app.get('/api/seller', function(req, res) {
        res.json({
          errno: 0,
          data: apiData.seller
        })
      })
      app.get('/api/goods', function(req, res) {
        res.json({
          errno: 0,
          data: apiData.goods
        })
      })
      app.get('/api/ratings', function(req, res) {
        res.json({
          errno: 0,
          data: apiData.ratings
        })
      })
    }
  }
}
