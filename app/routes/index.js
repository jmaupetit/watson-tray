var express = require('express');
var router = express.Router();
var child_process = require('child_process');

/* GET home page. */
router.get('/', function(req, res, next) {

  var status = child_process.execSync('watson status');
  console.log(status.toString());
  res.render('index.html', { title: 'Watson', status: status.toString() });
});

module.exports = router;
