//requires
var mongoose = require('mongoose');
//using Schema as a constructor so needs to be capitalized
var Schema = mongoose.Schema;

//create the schema
var messageSchema = new Schema({
  //set data type of each specific property - for data integrity
  //ensure user input matches data requirements
  name: {type: String},
  message: {type: String}
});//end messageSchema

//create model - data formatted according to the Schema
var Message = mongoose.model('Message', messageSchema);

//export the model (object) so it's accessible throughout the application
module.exports = Message;
