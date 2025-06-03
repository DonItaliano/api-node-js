const express = require('express'); 
const router = express.Router(); 

const RotasJP = require('./routesJP');
router.use('/', RotasJP);

module.exports = router;