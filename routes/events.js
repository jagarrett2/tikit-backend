'use strict';
const express = require('express');
const router = express.Router();
const sql = require("mssql");
const {config} = require('../config');

router.get('/', function (req, res) {
    sql.connect(config, function (err) {
        console.log("connected");
        if (err) console.log(err);

        var request = new sql.Request();

        request.query('SELECT * FROM Events', function (err, response) {
            if (err) console.log(err)
            console.log(response)
            res.send(response);
        });
    });
});

module.exports = router;