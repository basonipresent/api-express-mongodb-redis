const { LOG_LEVEL, LOG_TO_FILE, isTest } = require('../app/config');
const winston = require('winston');
const path = require('path');
const fs = require('fs');
const rfs = require('rotating-file-stream');

const levels = ['error', 'warn', 'info', 'verbose', 'debug', 'silly'];
const level = levels.find(x => x === LOG_LEVEL) || 'error';

const logger = new winston.createLogger({
  transports: [
    new winston.transports.Console({
      colorize: true,
      timestamp: () => new Date().toISOString(),
    }),
  ]
});

logger.level = level;

if (LOG_TO_FILE === true && isTest === false) {
  const logsPath = path.resolve(__dirname, '../../logs');

  if (fs.existsSync(logsPath) === false) {
    fs.mkdirSync(logsPath);
  }

  logger.add(new winston.transports.File({
    filename: 'error.log',
    name: 'error-file',
    level: 'error',
    stream: rfs.createStream('error.log', { interval: '1d', path: logsPath }),
  }));

  logger.add(new winston.transports.File({
    filename: 'warn.log',
    name: 'warn-file',
    level: 'warn',
    stream: rfs.createStream('warn.log', { interval: '1d', path: logsPath }),
  }));
}

if (isTest === true) {
  logger.remove(winston.transports.Console);
}

module.exports = logger;