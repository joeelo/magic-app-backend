const request = require("request");
const mtg = require('mtgsdk')
const express = require("express")
const app = express();

app.get("/app", (req, res) => {
  res.send("connected");
})





// const search = (cardName) => {
//   mtg.card.all({ name: cardName, pageSize: 1 })
//   .on('data', card => {
//       console.log(card.name)
//   })
// }

// search("Avacyn");
