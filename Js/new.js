$(function(){

var generatedArray = [];
var playerArray = [];
var player1Score = 0;
var player2Score = 0;
var player1Lives = 3;
var player2Lives = 3;
var currentPlayer = 1;

message("Welcome to Memory MPC,");

var padSounds = $('a');
  padSounds.on("click", function(e){
  e.preventDefault();
var fileName = $(this).attr("id");
var audio = new Audio("Sounds/"+ fileName +".wav");
    audio.play()
$("a").on("mousedown", function() {
    $(this).css("background", "orange");
  });
$("a").on("mouseup", function() {
    $(this).css("background", "none");
  });
});

$('#play').on("click", function(){
  startGame();
  message("Player 1 will start.  You have 3 lives remaining.  Input the correct sequence so you dont get booed off stage..Everyone is watching");
  playSequence();
  checkRound();
});

function playSequence(){
$.each(generatedArray, function(index, value){
  var id = "#" + value;
  setTimeout(function() {
    $(id).addClass("playing");
    var audio = new Audio("Sounds/" + value + ".wav");
    audio.play();
    }, (index + 1) * 970);
    setTimeout(function() {
      $(id).removeClass("playing")
      }, 970 + (index + 1)*970);
    });
  };

function checkRound(){
  var pArray = playerArray.toString();
  var genArray = generatedArray.toString();
  if(currentPlayer == 1 && pArray == genArray){
    randomNumber();
    playSequence();
    player1Score++;
    pArray = []
  }else if(currentPlayer == 1 && pArray !== genArray){
    player1Lives--
    message("Player 1, you lost a life, you have " + player1Lives + " left." )
    pArray = []
    randomNumber();
    playSequence();
  }else if(player1Lives === 0){
    message("Player 1 has no lives left.  It's player 2's turn. Player 2 get ready.")
    generatedArray = []
    currentPlayer = 2
  }else if(currentPlayer == 2 && pArray == genArray){
    randomNumber();
    playSequence();
    player2Score++;
    pArray =[]
  }else if(currentPlayer == 2 && pArray !== genArray){
    player2Lives--
    if (player2Lives === 0){
      checkWinner();
    }
  };
}

function randomNumber(){
  var compGenSeq = Math.floor(Math.random() * 15) + 1;
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


});




