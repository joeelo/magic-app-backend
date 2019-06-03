const mongoose = require("mongoose");
const validator = require("validator");
let ObjectId = mongoose.Schema.Types.ObjectId;

const CollectionSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },

  cards: [
    {
      type: {
        name: String,
        multiverseId: Number,
      }
    }
  ],
  
  owner: {
      type: ObjectId, 
      ref: "User"
  }
})

const Collection = new mongoose.model("collection", CollectionSchema);

module.exports = Collection;