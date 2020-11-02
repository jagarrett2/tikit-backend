'use strict';
require('dotenv').config();

const config = {
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    server: process.env.DATABASE_SERVER, 
    database: process.env.DATABASE 
};

module.exports = {
  PORT: process.env.PORT || 3000,
  config
};