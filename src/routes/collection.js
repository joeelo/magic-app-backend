const express = require(`express`);
const router = new express.Router();
const mtg = require('mtgsdk');
const cors = require("cors");

router.get(`/collection/:name?`, async (req, res) => {
  const cards = await mtg.card.where({name: req.query.name})
  try {
    res.send(cards);

  } catch (error) {
    res.status(400).send(error);
  }
})

module.exports = router;