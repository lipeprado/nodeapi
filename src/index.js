/* eslint-disable no-console */

import express from 'express';

import constants from './config/constants';
import './config/database';
import middlewaresConfig from './config/middlewares';

const app = express();

middlewaresConfig(app);

app.get('/', (req, res) => {
  res.send('Hello Node Api');
});

app.listen(constants.PORT, err => {
  if (err) {
    throw err;
  } else {
    console.log(`
        --------------------------------------------------
        Running on ${process.env.NODE_ENV}
        Server running on port: ${constants.PORT}
        Time to Hack!!  🌮 🐶 💪
        --------------------------------------------------
        `);
  }
});
