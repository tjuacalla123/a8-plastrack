
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var login = require('./routes/login');
var signup = require('./routes/signup');
var homepage = require('./routes/homepage');
var hometest = require('./routes/hometest');
var logpage = require('./routes/logpage');
var history = require('./routes/history');
var share = require('./routes/share');
var tips = require('./routes/tips');
var settings = require('./routes/settings');
var add = require('./routes/add');
var help = require('./routes/help');
var additem = require('./routes/additem');
var logdone = require('./routes/logdone');

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', login.view);
app.get('/signup', signup.view);
app.get('/homepage', homepage.view);
app.get('/hometest', hometest.view);
app.get('/logpage', logpage.view);
app.get('/history', history.view);
app.get('/share', share.view);
app.get('/tips', tips.view);
app.get('/settings', settings.view);
app.get('/add', add.addFriend);
app.get('/help', help.view);
app.get('/additem', additem.view);
app.get('/logdone', logdone.view);


// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
