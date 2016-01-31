$(function(){


  var turncount = 0; 
  var generatedArray = [];
  var player1array = [];
  var player2array = [];
  var player1Lives = 3;
  var player2Lives = 3;
  var generatedNumbers =[];

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
  })

padSounds.on("click", function(e){
  e.preventDefault();
  player1array.push(this);
  console.log(player1array);
});

message("Welcome to Memory MPC,");

$('#play').on("click", function(){
  startGame();
  message("Player 1 will start.  You have 3 lives remaining.  Input the correct sequence so you dont get booed off stage...Everyone is watching");
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
  // playerGo()
});

randomNumber = function(){
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

// function playerGo() {
//  padSounds.on("click", function(e){
//  e.preventDefault();
//  player1array.push(this);
// }
  
// function roundWin(){
//    var genArr = generatedArray.string()
//    var play1Arr = player1array.string()
//    if (genArr == play1Arr){
//     //generate 2 random numbers and push to generatedArray
//     playRound();
//   }else{
//     player1Lives -=
//     message("Player 1 has " + player1Lives + " remaining!")
//   }
//     //will then play the generatedArray
// }



// function playRound(){
//   $.each(generatedArray, function(index, value){
//     var id = "#" + value;
//     setTimeout(function() {
//       $(id).addClass("playing");
//       var audio = new Audio("Sounds/" + value + ".wav");
//       audio.play();
//     }, (index + 1) * 970);
//     setTimeout(function() {
//       $(id).removeClass("playing")
//     }, 970 + (index + 1)*970);
//   });
// }








