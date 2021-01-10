const mongoose = require('mongoose');
const redis = require('../utils/redis');
const logger = require('../utils/logger');

const loggerDispatcher = 'UserModel';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
  },
  companyName: {
    type: String,
    required: [true, 'Company name is required'],
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
  },
  city: {
    type: String,
    required: [true, 'City is required'],
  },
  state: {
    type: String,
    required: [true, 'state is required'],
  },
  zip: {
    type: String,
    required: [true, 'Zip is required'],
  },
  phone1: {
    type: String,
    required: [true, 'Phone 1 is required'],
  },
  phone2: {
    type: String,
    required: [true, 'Phone 2 is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
  },
  web: {
    type: String,
    required: [true, 'Web is required'],
  }
});

userSchema.statics.getAll = async function userGetAll() {
  let data;

  try {
    data = await redis.getAsync('users');
  } catch (err) {
    logger.error(err, { dispatcher: loggerDispatcher, from: 'userGetAll' });
  }

  if (data){
    console.log('get data from redis');
    return JSON.parse(data);
  }
  data = await this.find().sort( { firstName: 1 } ).exec();

  try {
    redis.client.set('users', JSON.stringify(data), 'EX', 60);
  } catch (err) {
    logger.error(err, { dispatcher: loggerDispatcher, from: 'userGetAll' });
  }

  return data;
};

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;