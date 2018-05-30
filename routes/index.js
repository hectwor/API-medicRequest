const express = require('express');
const router = express.Router();
const algoritms = require('../src/algoritms');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/listDoctors', algoritms.getAll);
module.exports = router;
