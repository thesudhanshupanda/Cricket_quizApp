var readlinesync = require("readline-sync");

var userName = readlinesync.question("Hey! Welcome to the cricket quiz App. let us know your name.");

var score =0 , question , answer
console.log(                                                   );
console.log( userName + " ,this level contains five questions and one point for each correct answer. lets playyyy!");


function cricplay (question, answer) {
var userAnswer = readlinesync.question(question);

if(userAnswer == answer){
console.log("correct! you have earned a point.");
score++;
}else{
  console.log("Incorrect answer! no points earned.");
}
}



var arr =[ 
  {
    question :
"what is the pitch length(yards) international cricket?", 

answer :"22"
}, 
{question :
"How many types of penalty balls in international cricket? ", 

answer :"3"
},
{question:
"How many ways can a batsman lose the wicket? ", 

answer :"5"
  },
 {question :
"Number of on-field umpires in a match are? ", 

answer :"2"
 },
  
  {question :
"Full form of DRS? ", 

answer :"Decision Review System"
  }
]

for (var i=0; i< arr.length ; i++)
{ 
  var a = arr[i];

cricplay (a.question, a.answer);
console.log("------------------------");

}

console.log("You current score is " + score);