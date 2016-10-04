/*Service*/
/*Contain logic for the app*/
app.service('dummyService', function(){

  this.currQuestion = {};
  this.currAnswers = [];
  this.guessed = 0;
  this.nextLevel = false;

  this.questions = [{
    id: 1,
    name: "Name programming languagas",
    complete: false
  }, {
    id: 2,
    name: "Name Vehicle Makes",
    complete: false
  }];

  this.answers = [{
      id: 1,
      questionId: 1,
      key: "Csharp",
      isGuessed: false,
      hint: "It is sharp language",
      percentage: 25
    }, {
      id: 2,
      questionId: 1,
      key: "Javascript",
      isGuessed: false,
      hint: "It is used to write front end applications",
      percentage: 35
    }, {
      id: 3,
      questionId: 1,
      key: "Java",
      isGuessed: false,
      hint: "It uses the cup as its logo",
      percentage: 34
  }, {
      id: 4,
      questionId: 2,
      key: "BMW",
      isGuessed: false,
      hint: "They have car model called polo",
      percentage: 25
    }, {
      id: 5,
      questionId: 2,
      key: "Ford",
      isGuessed: false,
      hint: "They have car model called focus",
      percentage: 35
    }, {
      id: 6,
      questionId: 2,
      key: "Audi",
      isGuessed: false,
      hint: "It has four rings as its logo",
      percentage: 34
  }];

  /*Map function - add two new properties to each object in the array and return the new array*/
  this.answers = this.answers.map((answer,index)=>{
    return Object.assign({},answer,{
      label: [answer.key, ""],
      data: [answer.percentage, 100-answer.percentage]
    })
  })

  /*Get Current Question*/
  /*Return quesiton*/
  this.getCurrentQuestion = function(){
    if (this.currQuestion.id != null && !this.currQuestion.complete)
      return this.currQuestion;

    for (var i = 0; i < this.questions.length; i++){
     if (!this.questions[i].complete) {
        this.currQuestion = this.questions[i];
        return this.currQuestion;
      }
    }
  }

 /*Get Current Answers*/
 /*Return answers*/
 this.getCurrentAnswers = function(id){
   if (this.currAnswers.id != null)
     return this.currAnswers;

    var newAnswers = [];
    for (var i = 0; i < this.answers.length; i++){
      if (this.answers[i].questionId == id){
         newAnswers.push(this.answers[i]);
      }
    }
    this.currAnswers = newAnswers;
    return this.currAnswers;
  }

  /*Check answer is correct*/
  /*Update data*/
  this.check = function(answer){
    for (var i=0; i < this.currAnswers.length; i++){
      if (answer.toString().toLowerCase() == this.currAnswers[i].key.toString().toLowerCase() && !this.currAnswers[i].isGuessed){
        this.currAnswers[i].isGuessed = true;
        this.guessed++;
        var result = this.checkLevelComplete();
        return result;
      }
    }
  }

  /*Check if user guessed all anwers*/
  /*Update data*/
  this.checkLevelComplete = function(){
    if (this.guessed === this.currAnswers.length){
      for (var i = 0; i < this.questions.length; i++){
        if (this.currQuestion.id == this.questions[i].id){
          this.questions[i].complete = true;
          this.guessed = 0;
          return true;
        }
      }
    }
  }

});
