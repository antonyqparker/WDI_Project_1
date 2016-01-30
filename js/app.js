$(function(){
  var padSounds = $('a');
padSounds.on("click", function(e){
  e.preventDefault();
  var fileName = $(this).attr("id");
  var audio = new Audio("Sounds/"+ fileName +".mp3");
  audio.play();
  })

message("Welcome to Memory MPC,");

$('#play').on("click", function(){
  startGame();
  console.log(startGame);
  message("Player 1 will start.  You have 3 lives remaining.  Input the correct sequence so you dont get booed off stage...Everyone is watching")
  });
});

var turncount = 0; 
var generatedArray = [];
var player1array = [];
var player2array = [];
var player1Lives = 3;
var player2Lives = 3;
var generatedNumbers =[];



randomNumber = function(){
  var compGenSeq = Math.floor(Math.random() * 15)
  generatedArray.push(compGenSeq);
  console.log(generatedArray);
}

function startGame(){
  starterNotes = 0
  while(starterNotes < 2 ){
    starterNotes ++;
    randomNumber();
  }
}


function message(msg){
    $('#gamePlay').text(msg)
  }








