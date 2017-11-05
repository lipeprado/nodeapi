/* eslint-disable no-console */

import mongoose from 'mongoose';

import constants from './constants';

// Remove the Warning with Promisse
mongoose.Promise = global.Promise;

// Connect the DB with URL

try {
  mongoose.connect(constants.MONGO_URL, {
    useMongoClient: true,
    /* other options */
  });
} catch (err) {
  mongoose.createConnection(constants.MONGO_URL);
}

mongoose.connection.once('open', () => console.log('mongoose DB running'));
