/*
* Angular app module
*/
var app = angular.module('game', ["chart.js"]);

app.controller('gameCtrl', ['$scope', function($scope) {

  $scope.questions = {
    id: 1,
    name: "Name programming languagas",
    complete: false
  }

  $scope.answers = [{
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

  $scope.checkAnswer = function(answer){
      for (var i=0; i < $scope.answers.length; i++){
        if (answer.toString().toLowerCase() == $scope.answers[i].key.toString().toLowerCase()){
          $scope.answers[i].isGuessed = true;
        }
      }
    }

  $scope.answers = $scope.answers.map((answer,index)=>{
    return Object.assign({},answer,{
      label: [answer.key, ""],
      data: [answer.percentage, 100-answer.percentage]
    })
  })

}]);

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
