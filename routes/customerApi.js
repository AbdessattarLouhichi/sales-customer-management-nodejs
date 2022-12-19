const express = require('express');
const { buy, findCustomers, createCustomer } = require('../controllers/customer.Controller');
const router = express.Router();

// Get customer
router.get('/customers', findCustomers)

// create customer
 router.post('/Createcustomer',createCustomer)

// post request buy cours
router.post('/buy/:idUser/:idCours', buy)

module.exports = router