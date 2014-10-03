var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { 
  	name 	  	: 'Terapon Rodyam',
  	position  	: 'Display Engineering',
  	social		: [ 
  		{"socialName" : "facebook", "faname" : "fa-facebook", "showlink" : "//www.facebook.com/terapon"},
		{"socialName" :	"twitter", "faname" : "fa-twitter", "showlink" : "//twitter.com/Terapon_cb"},
		{"socialName" :	"GitHub", "faname" : "fa-github", "showlink" : "//github.com/teraponR"}
  	],

  });
});

module.exports = router;