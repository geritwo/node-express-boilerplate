var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/service1', function(req, res, next) {
  res.render('index', { title: 'Service 1' });
});


module.exports = router;
