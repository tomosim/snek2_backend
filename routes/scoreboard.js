const scoreboardRouter = require("express").Router();
const { getScores, addScore } = require("../controllers");

scoreboardRouter
  .route("/")
  .get(getScores)
  .post(addScore);

module.exports = scoreboardRouter;
