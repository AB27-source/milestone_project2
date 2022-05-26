require('dotenv').config()
const methodOverride = require('method-override')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

module.exports.Place = require('./places')
module.exports.Menu = require('./menuItem')
module.exports.Comment = require('./comment')