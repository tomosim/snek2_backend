const mongoose = require("mongoose");
Schema = mongoose.Schema;

const ScoreSchema = new Schema({
  name: { type: String, required: true },
  score: { type: Number, required: true }
});

module.exports = mongoose.model("scores", ScoreSchema);
