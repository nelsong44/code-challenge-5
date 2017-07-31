//requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var index = require('./routes/index');
var message = require('./routes/message.js');

app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json()); // needed for angular requests
//source route
app.use('/', index);
//set var equal to db collection
app.use('/messages', message);
//db
var databaseUri = 'mongodb://localhost:27017/antares';
//connect to db
mongoose.connect(databaseUri);
//verify connection to db
mongoose.connection.on('connected', function() {
  console.log('mongoose connected to: ', databaseUri);
});//end connection success
//alert error if trouble connecting to db
mongoose.connection.on('error', function(err) {
  console.log('mongoose connection error: ', err);
});//end connection error


//set default port and spin up server to listen
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});//end set
