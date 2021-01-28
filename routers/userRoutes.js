// Handle user routes

const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.write('Welcome');
    res.end();
});

module.exports = router;