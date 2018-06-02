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

router.get('/listDoctors', algoritms.getAll);
router.post('/separarCita', algoritms.setDate);

module.exports = router;
