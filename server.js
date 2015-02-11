var express = require('express');
var session = require('express-session');
var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;

var app = express();
var port = 8111;

app.use(session({secret: 'sadklfW374#kdfjahdfkj194k3kJHdhDH'}));

app.use(passport.initialize());

app.use(passport.session());

passport.use(new GitHubStrategy({
	clientID: '69100c4cae197ca6b174',
	clientSecret: 'aadab9719e547d79c78dab40a849c2042505ef1c',
	callbackURL: 'http://localhost:8111/auth/github/callback'
},
function(accessToken, refreshToken, profile, done) {
	User.findOrCreate({githubId: profile.id}, function(err, user) {
		return done(err, user);
	});
}));

app.get('/auth/github',
	passport.authenticate('github'));

app.get('/auth/github/callback',
	passport.authenticate('github', {failureRedirect: 'login'}),
	function(req, res) {
		// Notes: successful authentication, redirect home.
		res.redirect('/#/home')
	})

var requireAuth = function(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.status(403).end();
  }
  return next();
}

// go to localhost:8111/auth/github to find the required path
app.get('/api/github/following', requireAuth, function(req, res) {
	//request to github, the ppl this user follows
	request('someUrl', function(err, responseData){
		if(!err){
			res.status(200).send(responseData);
		} else {
			console.log(err)
			res.status(err.statusCode).send();
		}
	})
})

app.listen(port, function() {
	console.log('Listening to ' + port);
})



