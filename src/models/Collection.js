const mongoose = require("mongoose");
const validator = require("validator");

const CollectionSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },

  user: [{type: String}],
  cards: [{type: String, multiverseId: Number}]


})

const Collection = new mongoose.model("collection", CollectionSchema);

module.exports = Collection;