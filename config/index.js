const ENV = process.env.NODE_ENV || "dev";

config = {
  dev: {
    DB_URL: "mongodb://localhost:27017/snake_scores"
  }
};

module.exports = config[ENV];
