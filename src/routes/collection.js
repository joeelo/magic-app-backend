const express = require(`express`);
const app = express();
const router = new express.Router();
const mtg = require('mtgsdk');
const cors = require("cors");
const Collection = require("../models/Collection");

app.use(cors());
app.use(express.json());
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

router.post(`/collection/:title`, async (req, res) => {
  const collection = Collection.find({name: req.body.title});
  console.log(req.body.title)
  try {
    res.send(collection);
  } catch(error) {
    res.status(400).send(error);
  }
})

router.post(`/collection`, async (req, res) => {
  const collection = new Collection(req.body)
  try {
    await collection.save()
    res.send(collection)
  } catch (error) {
    res.status(400).send("something has gone wrong")
  }
})



module.exports = router;