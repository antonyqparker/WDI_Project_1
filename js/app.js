$(function(){
  var padSounds = $('a');
padSounds.on("click", function(e){
  e.preventDefault();
  var fileName = $(this).attr("id");
  var audio = new Audio("Sounds/"+ fileName +".mp3");
  audio.play();
    })

$('#play').on("click", function(){
  startGame();
  console.log(startGame);
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
  //function saying player one, please copy the sequence
  // console.log("Copy the sequence of samples played by the sampler, each round the length of the sequence will increase by one note");
  starterNotes = 0
  while(starterNotes < 2 ){
    starterNotes ++;
    randomNumber();
  } //a pause then a play function in triggered which iterates over each index and plays the correct sound.
}


function message(msg){
    $('#gamePlay').text(msg)
  }








