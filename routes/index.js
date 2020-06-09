const express = require('express');
const router  = express.Router();
const controller = require('../controllers/controller')

router.get('/',controller.getHome);

router.post('/Generate Admission Dates',controller.get_t0);

exports.routes = router;
