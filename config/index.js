const ENV = process.env.NODE_ENV || "dev";

config = {
  dev: {
    DB_URL: "mongodb://localhost:27017/snake_scores"
  },
  production: {
    DB_URL: "mongodb://tomosim:t.s.890@ds039291.mlab.com:39291/snake-highscores"
  }
};

module.exports = config[ENV];
