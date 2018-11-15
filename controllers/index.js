const Score = require("../models/Scores");

const getScores = (req, res, next) => {
  Score.find()
    .then(scores => res.status(200).send({ scores }))
    .catch(next);
};

const addScore = (req, res, next) => {
  console.log(req.body);
  const { name, score } = req.body;
  Score.create({ name, score })
    .then(newScore => res.status(200).send({ newScore }))
    .catch(console.log);
};
module.exports = { getScores, addScore };
