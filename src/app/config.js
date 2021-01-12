require('dotenv').config();

const DB_PROTOCOL = process.env.DB_PROTOCOL;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;

const REDIS_HOST = process.env.REDIS_HOST;
const REDIS_PORT = process.env.REDIS_PORT;

/* eslint-disable no-trailing-spaces */
const config = {
  /* APP */
  APP_NAME: process.env.APP_NAME,
  /* ENV */
  isDev: process.env.NODE_ENV === 'development',
  isTest: process.env.NODE_ENV === 'test',
  isProd: process.env.NODE_ENV === 'production',

  /* SERVER */
  PORT: parseInt(process.env.PORT, 10) || 3000,

  /* DB */
  DB_PROTOCOL,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_URL: `${DB_PROTOCOL}://${DB_HOST}:${DB_PORT}/${DB_NAME}`,

  /* REDIS */
  REDIS_HOST,
  REDIS_PORT: parseInt(REDIS_PORT, 10) || 6379,
  REDIS_URL: `${REDIS_HOST}:${REDIS_PORT}`,

  /* LOG */
  LOG_LEVEL: process.env.LOG_LEVEL,
  LOG_TO_FILE: process.env.LOG_TO_FILE === 'true',
};

module.exports = config;