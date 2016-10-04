/*
* Angular app module
*/
var app = angular.module('game', ['ngResource', "chart.js"]);

app.service('gameService', [ '$resource', '$http',function($resource, $http){

  this.currQuestion = {};
  this.currAnswers = [];
  this.guessed = 0;
  this.nextLevel = false;

  /*Get Current Question*/
  /*Return quesiton*/
  this.loadGame = function(){
    //$http.get('/api/database').success(function(data) {
    //  alert(data[0].question);
      //alert(data);
    //});
  }

}]);


/*Controller*/
/*Reponsible for passing data between views and service*/
app.controller('gameCtrl', function($scope, dummyService, gameService) {

    var data = gameService.loadGame();

    $scope.question = dummyService.getCurrentQuestion();
    $scope.answers = dummyService.getCurrentAnswers($scope.question.id);

    $scope.checkAnswer = function(answer){
      $scope.nextLevel = dummyService.check(answer);
    }

    $scope.startNextLevel = function(){
      $scope.question = dummyService.getCurrentQuestion();
      $scope.answers = dummyService.getCurrentAnswers($scope.question.id);
      $scope.nextLevel = false;
    }
});


/*
* Mongoose Database connection
*/
/*
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017')

// Get db connection.
var db = mongoose.connection;
//log errors
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('connection with db opened')
})*/
