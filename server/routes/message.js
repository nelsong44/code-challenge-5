//requires
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//require Message schema
var Message = require('../models/message.schema.js');

//request to get all documents from db to display on DOM
router.get('/', function(req, res) {
  //find all Message objects in db matching Schema
  Message.find({}, function(err, data) {
    if(err) {
      console.log('find error: ', err);
      res.sendStatus(500); //internal server error
    } else {
      console.log(data);
      res.send(data); //send array of documents from db to client
      //res.send(result.rows) - same as
    }//end if
  });//end find
});//end GET

//request to store a new Message in the db
router.post('/', function(req, res) {
  console.log('logging the data from message controller: ', req.body);
  var addMessage = new Message(req.body);
  addMessage.save(function(err, data) {
    console.log('new message saved in db: ', data); //new Message saved in db
    if(err) {
      console.log('error saving message: ', err);
      res.sendStatus(500); //internal server error
    } else {
      res.sendStatus(201); //created
    }//end if
  });//end save
});//end POST

//export router
module.exports = router;
