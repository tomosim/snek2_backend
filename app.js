const app = require("express")();
const apiRouter = require("./routes");
const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL || require("./config").DB_URL;
const bodyParser = require("body-parser");
const cors = require("cors");

mongoose.connect(
  DB_URL,
  { useNewUrlParser: true }
);
app.use(cors());
app.use(bodyParser.json());
app.use("/api/", apiRouter);
app.get("/*", (req, res, next) => res.status(400).send({ msg: "not found" }));

module.exports = app;
