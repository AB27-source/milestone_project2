const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: { type: String, default: 'http://placekitten.com/400/400' },
  cuisines: { type: String, required: true },
  city: { type: String, default: "Anytown" },
  state: { type: String, default: "USA" },
  founded: {
    type: Number,
    min: [1673, "Can not be that old!"],
    max: [new Date().getFullYear(), 'Date set in the future']
  },
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
  food1: { type: String, required: true },
  food1IMG: { type: String, default: 'http://placekitten.com/400/400' },
  food2: { type: String, required: true },
  food2IMG: { type: String, default: 'http://placekitten.com/400/400' },
  food3: { type: String, required: true },
  food3IMG: { type: String, default: 'http://placekitten.com/400/400' }
});

placeSchema.methods.showEstablished = function(){
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

module.exports = mongoose.model("Place", placeSchema);