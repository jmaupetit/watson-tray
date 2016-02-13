var express = require('express');
var moment = require('moment');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    var fs = require("fs");
    var content = fs.readFileSync('/Users/maupetit/Library/Application\ Support/watson/state');
    var state = JSON.parse(content);

    // Fix start date representation
    var start = moment.unix(parseInt(state.start, 10));
    state.start_format = start.format('YYYY-MM-DD HH:mm');

    res.render('index.html', { title: 'Watson', state: state });
});

module.exports = router;
