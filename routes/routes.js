'use strict';
const express = require('express');
const events = require('./events');
const user = require('./user');
const app = express();
app.use(express.json());

app.use('/events', events);
app.use('/user', events);


module.exports = app;