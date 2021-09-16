const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const router = require('./routes/index');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

module.exports = app;

const server = () =>
  app.listen(4000, () => {
    console.log("App listening on port 4000!");
  });

server();