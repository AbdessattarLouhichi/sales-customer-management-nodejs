const express = require('express');
const { createCours, findCours } = require('../controllers/cours.Controller');
const router = express.Router();

// Post request Create cours

router.post('/CreateCours',createCours)


// Get cours
router.get('/findCours', findCours)


module.exports = router