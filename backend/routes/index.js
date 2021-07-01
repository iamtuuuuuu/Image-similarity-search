const imageRoute = require('./image')

const route = app => {
  app.use('/api/images', imageRoute)
}

module.exports = route