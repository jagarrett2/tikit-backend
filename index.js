'use strict';
const express = require('express');
const routes = require('./routes/routes');
const cors = require('cors');
const {PORT} = require('./config');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});