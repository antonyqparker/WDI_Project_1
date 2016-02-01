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
  var text = this.id;
  var number = parseInt(text, 10);
  player1array.push(number);
  console.log(player1array);
  var p1array = player1array.toString();
  var genArray = generatedArray.toString();
  checkRound();
  switchPlayer();
  if (p1array == genArray){
    randomNumber();
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
    player1array=[]
  }
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
});

$('#reset').on("click", function(){
  location.reload();
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

function checkRound(){
  var p1array = player1array.toString();
  var genArray = generatedArray.toString();
    if(p1array !== genArray){
      player1Lives --
      message("Player 1 loses a life.  Player 1 has " + player1Lives + " remaining")
    }else{
      player1Lives = player1Lives;
    }
  }

function checkRoundp2(){
  var p2Str = player2array.toString();
  var genStr = generatedArray.toString();
  if(p2Str !== genStr){
    player2Lives --
    message("Player 2 loses a life.  Player 2 has " + player2Lives + " remaining")
  }
}

function checkForP2Lives(){
  if(player2Lives == 0){
    message("Player 2, you have run out of lives. Get off the stage!")
    checkForWinner();
  }
}

function checkForWinner(){
  if (player1array.length > player2array.length){
    message ("Player 1, you win!");
  }else if (player2array.length > player1array.length){
    message("Player 2, you win!");
  }else if (player2array.length == player1array.length){
    message("It's a draw!");
  }
};

function switchPlayer(){
  if(player1Lives == 0){
        message("Player 1 has run out of lives, its player 2's turn. Please press 'Next Player'to continue")
     generatedArray=[]
  $('#nextPlayer').on("click", function(){
    startGame();
    message("Player 2.  You have 3 lives remaining. Input the correct sequence so you dont get booed off stage...Everyone is watching");
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
  });


     //something here to start the sequence again
     padSounds.on("click", function(e){
       e.preventDefault();
       var text = this.id;
       var number = parseInt(text, 10);
      player2array.push(number);
       // console.log(player2array);
       var p2array = player2array.toString();
       var genArray = generatedArray.toString();
       checkRoundp2();
       checkForP2Lives();
       if (p2array == genArray){
         randomNumber();
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
         player2array=[]
       }
     });
   }
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








