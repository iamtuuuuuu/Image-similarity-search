const mongoose = require('mongoose')

const Schema = mongoose.Schema

const imageSchema = new Schema({
  path: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model('Image', imageSchema)