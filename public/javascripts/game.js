/*
* Angular app module
*/
var app = angular.module('game', ["chart.js"]);

app.service('gameService', function(){

  this.questions = {
    id: 1,
    name: "Name programming languagas",
    complete: false
  }

  this.answers = [{
      id: 1,
      questionId: 1,
      key: "Csharp",
      isGuessed: false,
      hint: "It is sharp language",
      percentage: 25
    }, {
      id: 2,
      questionId: 2,
      key: "Javascript",
      isGuessed: false,
      hint: "It is used to write front end applications",
      percentage: 35
    }, {
      id: 3,
      questionId: 3,
      key: "Java",
      isGuessed: false,
      hint: "It uses the cup as its logo",
      percentage: 34
  }];

  /*Check answer is correct*/
  /*Update data*/
  this.check = function(answer){
    for (var i=0; i < this.answers.length; i++){
      if (answer.toString().toLowerCase() == this.answers[i].key.toString().toLowerCase()){
        this.answers[i].isGuessed = true;
      }
    }
  }

  this.answers = this.answers.map((answer,index)=>{
    return Object.assign({},answer,{
      label: [answer.key, ""],
      data: [answer.percentage, 100-answer.percentage]
    })
  })

});

app.controller('gameCtrl', function($scope, gameService) {
    $scope.questions = gameService.questions;
    $scope.answers = gameService.answers;

    $scope.checkAnswer = function(answer){
      gameService.check(answer);
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
