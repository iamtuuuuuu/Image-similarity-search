require('dotenv/config')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const logger = require('morgan')

const route = require('./routes')

const PORT = process.env.PORT || 3000


// middlewares
app.use(logger('tiny'))
app.use(
  express.urlencoded({
    extended: true,
  }),
)
app.use(express.json())
app.use('/public/uploads', express.static(__dirname + '/public/uploads'))

route(app)

// catch 404 error
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// err handler function
app.use((err, req, res, next) => {
  const error = app.get('env') === 'development' ? err : {}
  const status = err.status || 500

  // res to clients
  return res.status(status).json({
    error: {
      message: error.message
    }
  })
})

mongoose.connect(process.env.CONNECTION_STRING, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('✅ connect success')
  })
  .catch(() => {
    console.error('❌ connect fail')
  })

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})

