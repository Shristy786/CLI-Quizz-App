var readlineSync = require("readline-sync");

var score = 0;



var highScores = [{
  Name: "Shristy",
  score: 5
},
{
  Name: "Kshitij",
  score: 4
},
]

var questionList = [{
  Question: "What is my favorite series ?",
  Answer: "Broken But Beautiful"
},
{
    Question: "What is my zodiac sign ?",
    Answer: "Tauras"
  },
  {
    Question: "What does my name mean ?",
    Answer: "World"
  },
{
  Question: " What is my nickname",
  Answer: "Kajju"
},
{
  Question: " where do i work ?",
  Answer: "Nagarro"
}];
function Welcome()
  {
    var UserName = readlineSync.question("Give me your Name");
console.log(" hii " + UserName + " welcome to DO YOU KNOW  Shristy ?");
    
  }
function Quiz(Ques, Ansr) {
  var userAnswer = readlineSync.question(Ques);

  if (userAnswer.toUpperCase() === Ansr.toUpperCase()) {
    console.log("Your answer is correct!!");
    score++;
  }

  else {
    console.log("incorrect Answer!!");

  }

  console.log("current score:" +score);
  console.log("----------");

}
function play()
  {
    for (var i = 0; i < questionList.length; i++) {
     Quiz(questionList[i].Question, questionList[i].Answer);
}
}
function HighScore(){
   console.log("high scores are :");
    highScores.map(score=>console.log(score.Name," :",score.score));
  for (var i =0;i<highScores.length; i++) {
  if (score > highScores[i].score) {
    console.log("Cograts!! your score is high please send me the screenshots for updation!");
    break;
  }
}
}
Welcome();
play();
HighScore();
  

