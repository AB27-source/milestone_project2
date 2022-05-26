const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: { type: String, default: 'http://placekitten.com/400/400' }
});


module.exports = mongoose.model("Menu", menuSchema);