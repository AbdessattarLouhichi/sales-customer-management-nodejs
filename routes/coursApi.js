const express = require('express');
const { createCours, findCours } = require('../controllers/cours.Controller');
const router = express.Router();
const passport = require('passport');
const authRole = require('../passport/authRole');

// Post request Create cours

router.post('/CreateCours',passport.authenticate('bearer', { session: false }),authRole("admin"),createCours)


// Get cours
router.get('/findCours', findCours)


module.exports = router