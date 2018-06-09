const express = require('express');
let bodyParser = require('body-parser');
const router = express.Router();
const algoritms = require('../src/algoritms');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
router.use(bodyParser.json());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/listDoctors', algoritms.getAllDoctors);
router.get('/ListPatients', algoritms.getAllPatients);
router.get('ListDates', algoritms.getAllDates);
router.get('/existePaciente=:dniPatient', algoritms.existPatient);
router.post('/crearPaciente', algoritms.createPatient);
router.post('/separarCita', algoritms.setDate);

module.exports = router;
