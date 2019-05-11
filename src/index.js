const express = require(`express`);
const app = express();
const userRouter = require("./routes/user");
const collectionRouter = require("./routes/collection");
require("../db/mongoose");

app.use(express.json());
app.use(userRouter);
app.use(collectionRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})
