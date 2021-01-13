const { REDIS_HOST, REDIS_PORT, REDIS_URL } = require("../app/config");
const redis = require("redis");
const logger = require("./logger");

const loggerDispatcher = "Redis";

const client = redis.createClient(REDIS_URL);

client.on("error", (err) => {
  logger.error(err, { dispatcher: loggerDispatcher, from: "error event" });
});

const getAsync = (key) =>
  new Promise((resolve, reject) => {
    client.get(key, (err, data) => {
      if (err) {
        reject(err);
        logger.error(err, { dispatcher: loggerDispatcher, from: "getAsync" });
      }
      resolve(data);
    });
  });

module.exports = {
  client,
  getAsync,
};
