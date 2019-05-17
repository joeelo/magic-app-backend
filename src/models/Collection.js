const mongoose = require("mongoose");
const validator = require("validator");

const CollectionSchema = new mongoose.Schema({
  name: {
    type: "string",
    require: true
  },

  user: [{type: String}]


})

const Collection = new mongoose.model("collection", CollectionSchema);

module.exports = Collection;