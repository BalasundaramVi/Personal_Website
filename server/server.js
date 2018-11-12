const express = require('express');

// MIDDLEWARE
const parser = require('body-parser');
const morgan = require('morgan');
const compression = require('compression');

const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../client/public')));

app.use(morgan('dev'));
app.use(parser.json());
app.use(compression());


// SERVER REQUST METHODS


// APP LISTENING PROTOCOL
const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`>>>>> Express server listening on port ${PORT}...`);
});
