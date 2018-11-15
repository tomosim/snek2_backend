const apiRouter = require("express").Router();
const scoreboardRouter = require("./scoreboard");

apiRouter.use("/scoreboard", scoreboardRouter);

module.exports = apiRouter;
