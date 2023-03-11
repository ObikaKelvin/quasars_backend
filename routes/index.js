const express = require('express');
const listRoute = require('./listRoute');

const router = express.Router({ mergeParams: true });

router.use('/lists', listRoute);

module.exports = router;