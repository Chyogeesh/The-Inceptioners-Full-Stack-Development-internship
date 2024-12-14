const express = require('express');
const router = express.Router();
const { getPackages, addPackage, updatePackage, deletePackage } = require('../controllers/packageController');

router.get('/', getPackages);
router.post('/admin', addPackage);
router.put('/admin/:id', updatePackage);
router.delete('/admin/:id', deletePackage);

module.exports = router;
