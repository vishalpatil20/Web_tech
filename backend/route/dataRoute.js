// routes/dataRoutes.js
const express = require('express');
const router = express.Router();
const dataController = require('../controller/dataController');

router.post('/storeData', dataController.storeData);

module.exports = router;
