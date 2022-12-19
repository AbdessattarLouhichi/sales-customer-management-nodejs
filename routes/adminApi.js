const express = require('express');
const { createAdmin,findAdmin } = require('../controllers/adminController');
const router = express.Router();



// Get admin
router.get('/users', findAdmin)

// create admin
 router.post('/users',createAdmin)



 module.exports = router;