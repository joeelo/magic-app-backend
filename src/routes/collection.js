const express = require(`express`);
const app = express();
const router = new express.Router();
const mtg = require('mtgsdk');
const cors = require("cors");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get(`/collection/:name?`, async (req, res) => {
  const cards = await mtg.card.where({name: req.query.name})
  try {
    res.send(cards);
  } catch (error) {
    res.status(400).send(error);
  }
})

// router.post(`/library`, async (req, res) => {

// })

module.exports = router;