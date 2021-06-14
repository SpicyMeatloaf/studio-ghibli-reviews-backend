var express = require('express');
var logger = require('morgan');
var cors = require('cors');
var reviewsRouter = require('./routes/reviews');

var app = express();

require('dotenv').config();
require('./config/database');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

app.use('/database/reviews', reviewsRouter);

module.exports = app;
