/*
* Angular app module
*/
var app = angular.module('game', ['ngResource', "chart.js"]);

app.service('gameService1', [ '$resource', function($resource){

  this.currQuestion = {};
  this.currAnswers = [];
  this.guessed = 0;
  this.nextLevel = false;

  /*Get Current Question*/
  /*Return quesiton*/
  this.loadGame = function(){
    var resource = $resource('/api/database');
    var gameLevels;
    resource.query(function (Levels){
      gameLevels = Levels;
    })
    return gameLevels;
  }

}]);


/*Controller*/
/*Reponsible for passing data between views and service*/
app.controller('gameCtrl', function($scope, gameService, gameService1) {

    var data = gameService1.loadGame();

    $scope.question = gameService.getCurrentQuestion();
    $scope.answers = gameService.getCurrentAnswers($scope.question.id);

    $scope.checkAnswer = function(answer){
      $scope.nextLevel = gameService.check(answer);
    }

    $scope.startNextLevel = function(){
      $scope.question = gameService.getCurrentQuestion();
      $scope.answers = gameService.getCurrentAnswers($scope.question.id);
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
