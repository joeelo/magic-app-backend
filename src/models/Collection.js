const mongoose = require("mongoose");
const validator = require("validator");

const CollectionSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },

  cards: [{
    type: Number,
    name: String,
    numberOwned: Number
  }],

  user: {
    type: String,
    require: true
  }

})

const Collection = new mongoose.model("Collection", CollectionSchema);

module.exports = Collection;