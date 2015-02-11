var express = require('express');
var session = require('express-session');
var passport = require('passport');
var githubStrategy = require('passport-github').Strategy;

var app = express();
var port = 8111;

app.use(session({secret: 'sadklfW374#kdfjahdfkj194k3kJHdhDH'}));

app.use(passport.initialize());

app.use(passport.session());





app.listen(port, function() {
	console.log('Listening to ' + port);
})