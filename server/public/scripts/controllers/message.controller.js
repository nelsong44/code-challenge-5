//client-side message route

//create message controller
app.controller('MessageController', function($http) {
  console.log('MessageController');
  //retrieve and load message info stored in db on DOM on page load
  getMessages();
  //define scope of controller
  var vm = this;
  vm.message = {};

  //function to POST new user and message to db
  vm.addMessage = function() {
    //post user input to db
    $http.post('/messages', vm.message)
    .then(function(response) {
      //verify object sent to db = vm.message
      console.log(response);
      //update display to include new user message
      getMessages();
    });//end POST
  };//end addMessage

  //function to GET user and message from db to display on DOM
  function getMessages() {
    $http.get('/messages')
    .then(function(response) {
      console.log(response.data); //all user input from db
      //set response equal to array for ng-repeat
      vm.storedInput = response.data;
    });//end GET
  }//end getMessages

});//end message controller
