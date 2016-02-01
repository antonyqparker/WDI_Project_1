$(function(){


  var generatedArray = [];
  var playerArray = [];
  var player1Score = 0;
  var player2Score = 0;
  var player1Lives = 3;
  var player2Lives = 3;
  var currentPlayer = 1



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


  $('#reset').on("click", function(){
    location.reload();
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


padSounds.on("click", function(e){
  e.preventDefault();
  var text = this.id;
  var number = parseInt(text, 10);
  playerArray.push(number);
  console.log(playerArray);
  var pArray = playerArray.toString();
  var genArray = generatedArray.toString();
  if(playerArray.length === generatedArray.length) {
    checkRound();
  }
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
  var pArray = playerArray.toString();
  var genArray = generatedArray.toString();
  if(pArray == genArray && currentPlayer == 1){
    randomNumber();
    player1Score ++;
    console.log(player1Score);
    $.each(generatedArray, function(index, value){
      var id = "#" + value;
      setTimeout(function(){
        $(id).addClass("playing");
        var audio = new Audio("Sounds/" + value + ".wav");
        audio.play();
      }, (index + 1) * 970);
      setTimeout(function() {
        $(id).removeClass("playing")
      }, 970 + (index + 1)*970);
    });
  }else if(pArray == genArray && currentPlayer == 2){
      randomNumber();
      player2Score ++;
      console.log(player2Score);
      $.each(generatedArray, function(index, value){
        var id = "#" + value;
        setTimeout(function(){
          $(id).addClass("playing");
          var audio = new Audio("Sounds/" + value + ".wav");
          audio.play();
        }, (index + 1) * 970);
        setTimeout(function() {
          $(id).removeClass("playing")
        }, 970 + (index + 1)*970);
      });
  }else if (player1Lives == 0){
    player2Lives --;
    playerArray=[];
    message("Player 2 loses a life. Player 2 has " + player2Lives + " remaining");
    currentPlayer = 2
  }else{
    player1Lives--;
    playerArray=[]
    message("Player 1 loses a life.  Player 1 has " + player1Lives + " remaining")
    switchPlayer();
  }
}

function checkForWinner(){
  if(player1Score > player2Score){
    message("Player 1 has " + player1Score + " and Player 2 has " + player2Score + ". Player 1 wins!!")
  }else if (player1Score < player2Score){
  message("Player 1 has " + player1Score + " and Player 2 has " + player2Score + ". Player 2 wins!!")
  }else if (player1Score == player2Score){
    message("It's a draw. Player 1 has " + player1Score + " points and Player 2 has " + player2Score + " points!")
  }
}

function switchPlayer(){
  if(player1Lives == 0){
    message("Player 1 has run out of lives, its player 2's turn. Please press 'Start Game'to continue")
    generatedArray = [];
    $('#nextPlayer').on("click", function(){
      startGame();
      message("Player 2. You have 3 lives remaining. Input the correct sequence so you dont get booed off stage...Everyone is watching");
      $.each(generatedArray, function(index, value){
        var id = "#" + value;
        setTimeout(function(){
          $(id).addClass("playing");
          var audio = new Audio("Sounds/" + value + ".wav");
          audio.play();
        }, (index + 1) * 970);
        setTimeout(function() {
          $(id).removeClass("playing")
        }, 970 + (index + 1)*970);
      });
    });
   }else if(player1Lives == 0 && player2Lives == 0){
    checkForWinner();
   }
  }
});

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
//       });
//     });





  //    //something here to start the sequence again
  //    padSounds.on("click", function(e){
  //      e.preventDefault();
  //      var text = this.id;
  //      var number = parseInt(text, 10);
  //     player2array.push(number);
  //      // console.log(player2array);
  //      var p2array = player2array.toString();
  //      var genArray = generatedArray.toString();
  //      checkRoundp2();
  //      checkForP2Lives();
  //      if (p2array == genArray){
  //        randomNumber();
  //        $.each(generatedArray, function(index, value){
  //          var id = "#" + value;
  //          setTimeout(function() {
  //            $(id).addClass("playing");
  //            var audio = new Audio("Sounds/" + value + ".wav");
  //            audio.play();
  //          }, (index + 1) * 970);
  //          setTimeout(function() {
  //            $(id).removeClass("playing")
  //          }, 970 + (index + 1)*970);
  //        });
  //        player2array=[]
  //      }
  //    });
  //  }
  // }

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








