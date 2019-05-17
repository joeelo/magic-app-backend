const express = require(`express`);
const app = express();
const cors = require("cors");
const userRouter = require("./routes/user");
const collectionRouter = require("./routes/collection");
require("../db/mongoose");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());
app.use(userRouter);
app.use(collectionRouter);


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})
