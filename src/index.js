import express from 'express';
/* eslint-disable no-console */

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
  if (err) {
    throw err;
  } else {
    console.log(`Server running on port: ${PORT}
        ------
        Running on ${process.env.NODE_ENV}
        ------
        Time to Hack!
        `);
  }
});
