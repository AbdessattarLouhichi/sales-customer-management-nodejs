const express = require('express');
const { buy, findCustomers, createCustomer } = require('../controllers/customer.Controller');
const router = express.Router();
const passport = require('passport');
const authRole = require('../passport/authRole');

// Get customer
router.get('/customers',passport.authenticate('bearer', { session: false }),authRole(["admin"]), findCustomers)

// create customer
 router.post('/Createcustomer',passport.authenticate('bearer', { session: false }),authRole(["admin"]),createCustomer)

// post request buy cours
router.post('/buy/:idUser/:idCours',passport.authenticate('bearer', { session: false }),authRole(["admin","customer"]), buy)

module.exports = router