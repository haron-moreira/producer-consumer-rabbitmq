// src/routes/index.js
const express = require('express');
const router = express.Router();
const indexController = require('../controllers/');

router.post(
    "/add-queue", indexController.postQueueItem
);

module.exports = router;