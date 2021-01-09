const {LOG_LEVEL, LOG_TO_FILE, isTest} = require('../app/config');
const winston = require('winston');
const path = require('path');
const fs = require('fs');
const rfs = require('rotating-file-stream');

const levels = ['error', 'warn', 'info', 'verbose', 'debug', 'silly'];
const level = levels.find(x => x === LOG_LEVEL) || 'error';

