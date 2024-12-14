const express = require('express');
const router = express.Router();
const { bookPackage } = require('../controllers/bookingController');

router.post('/', bookPackage);

module.exports = router;
