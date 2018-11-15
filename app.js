const app = require("express")();
const apiRouter = require("./routes");
const mongoose = require("mongoose");
const { DB_URL } = require("./config");
const bodyParser = require("body-parser");
mongoose.connect(
  DB_URL,
  { useNewUrlParser: true }
);
app.use(bodyParser.json());
app.use("/api/", apiRouter);
app.get("/*", (req, res, next) => res.status(400).send({ msg: "not found" }));

module.exports = app;
