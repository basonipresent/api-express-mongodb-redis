require('dotenv').config();

const DB_PROTOCOL = process.env.DB_PROTOCOL;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;

const NODE_ENV = 'test';

/* eslint-disable no-trailing-spaces */
const config = {
    /* ENV */
    isDev: NODE_ENV === 'development',
    isTest: NODE_ENV === 'test',
    isProd: NODE_ENV === 'production',
  
    /* SERVER */
    PORT: parseInt(process.env.PORT, 10) || 3000,
  
    /* DB */
    DB_PROTOCOL : 'mongodb',
    DB_HOST : 'localhost',
    DB_PORT : '27017',
    DB_NAME : 'practice',
    DB_URL: `${DB_PROTOCOL}://${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  
    /* REDIS */
    REDIS_HOST: process.env.REDIS_HOST,
    REDIS_PORT: parseInt(process.env.REDIS_PORT, 10) || 6379,
  
    /* LOG */
    LOG_LEVEL: process.env.LOG_LEVEL,
    LOG_TO_FILE: process.env.LOG_TO_FILE === 'true',
  };
  
  module.exports = config;