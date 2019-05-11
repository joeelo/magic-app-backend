const express = require(`express`);
const router = new express.Router();
const User = require('../models/User');

router.post(`/users`, async (req, res) => {
  const user = new User(req.body)
  try {
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
})



module.exports = router;