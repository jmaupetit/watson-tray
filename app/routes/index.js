var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    var fs = require("fs");
    var content = fs.readFileSync('/Users/maupetit/Library/Application\ Support/watson/state');
    var state = JSON.parse(content);

    res.render('index.html', { title: 'Watson', status: state });
});

module.exports = router;
