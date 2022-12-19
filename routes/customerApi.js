const express = require('express');
const { buy } = require('../controllers/customerController');
const router = express.Router();

// Get customer
router.get('/customers', findCustomer)

// create customer
 router.post('/Createcustomer',createCustomer)

// post request buy cours
router.post('/buy/:idUser/:idCours', buy)

module.exports = router