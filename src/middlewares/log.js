const { LOG_TO_FILE, isTest } = require("../app/config");
const morgan = require("morgan");
const path = require("path");
const fs = require("fs");
const rfs = require("rotating-file-stream");
const { EOL } = require("os");

const logPath = path.resolve(__dirname, "../../logs");
const format =
  ':id :remote-addr - :remote-user [:date[iso]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" :new-line';

if (fs.existsSync(logPath) === false) {
  fs.mkdirSync(logPath);
}

morgan.token("id", (req) => req.id);
morgan.token("new-line", () => EOL);

const requestStream =
  LOG_TO_FILE === false || isTest === true
    ? process.stdout
    : rfs.createStream("request.log", {
        interval: "1d",
        path: logPath,
      });

const request = morgan(format, {
  immediate: true,
  stream: requestStream,
});

const responseOkStream =
  LOG_TO_FILE === false || isTest === true
    ? process.stdout
    : rfs.createStream("response-error.log", {
        interval: "1d",
        path: logPath,
      });

const responseOk = morgan(format, {
  skip: (req, res) => res.statusCode >= 400,
  stream: responseOkStream,
});

const responseErrorStream =
  LOG_TO_FILE === false || isTest === true
    ? process.stderr
    : rfs.createStream("response-error.log", {
        interval: "1d",
        path: logPath,
      });

const responseError = morgan(format, {
  skip: (req, res) => res.statusCode < 400,
  stream: responseErrorStream,
});

module.exports = {
  request,
  responseOk,
  responseError,
};
