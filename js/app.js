$(function(){


  var generatedArray = [];
  var playerArray = [];
  var player1Score = 0;
  var player2Score = 0;
  var player1Lives = 3;
  var player2Lives = 3;
  var currentPlayer = 1;



  var padSounds = $('a');
  padSounds.on("click", function(e){
    e.preventDefault();
    var fileName = $(this).attr("id");
    var audio = new Audio("Sounds/"+ fileName +".wav");
    audio.play()
    $("a").on("mousedown", function(){
      $(this).addClass("clicked");
    });
    $("a").on("mouseup", function(){
      $(this).removeClass("clicked");
    });
  })

//a click event listener which loads all the samples onto the pads when the page is loaded.

  $('#reset').on("click", function(){
    location.reload();
  });

//reloads the page and starts the game right from the beginning.

  message("Welcome to Memory MPC,");


  $('#play').on("click", function(){
    playerArray = [];
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

//when play is clicked the play function is called which triggers the randomNumber function to generate two numbers and push them into generated array.  Each of the numbers in the array then plays a corresponding sample using similar technique to DP except with a TimeOut() to allow each sample to play sequentially.

padSounds.on("click", function(e){
  e.preventDefault();
  var text = this.id;
  var number = parseInt(text, 10);
  playerArray.push(number);
  console.log(playerArray);
  var pArray = playerArray.toString();
  var genArray = generatedArray.toString();
  if(playerArray.length === generatedArray.length){
    checkRound();
  }
  if (player1Lives === 0 && player2Lives === 0){
    checkForWinner();
  }
 });

//after the generatedArray has played it's samples it is now the players turn to go.  Each click of a pad pushes its id into an array called playerArray.  When both arrays are the same length the checkRound function is called which checks whether the two arrays match. 


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

//starts the game by calling randomNumber twice using a loop
//random number generated a random number between 1 and 16
//they are then pushed to the generatedArray

function message(msg){
  $('#gamePlay').text(msg)
}

//for supplying the gamePlay box with HTML text

function checkRound(){
  var pArray = playerArray.toString();
  var genArray = generatedArray.toString();
  if(pArray == genArray && currentPlayer == 1){
    randomNumber();
    player1Score ++;
    playerArray = [];
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
      playerArray = [];
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
      currentPlayer = 2;
    }else{
      player1Lives--;
      playerArray=[];
      message("Player 1 loses a life.  Player 1 has " + player1Lives + " remaining");
      switchPlayer();
    }
  }

//Check round is seeing whether the playerArray and generatedArray match and also who's turn it is in order to add scores the the right player.  First part is an if statement checking whether the player is player1 and if so will add points to player 1.  After is another if statment that will add points to player2.
//Code is repeated as i couldn't find a way to add points to both player 1 and 2 in the same function.

function checkForWinner(){
  console.log("checkForWinner")
  if(player1Score > player2Score){
    message("Player 1 has " + player1Score + " and Player 2 has " + player2Score + ". Player 1 wins!!")
  }else if (player1Score < player2Score){
  message("Player 1 has " + player1Score + " and Player 2 has " + player2Score + ". Player 2 wins!!")
  }else if (player1Score == player2Score){
    message("It's a draw. Player 1 has " + player1Score + " points and Player 2 has " + player2Score + " points!")
  }
}

//check for winner is called every time a pad is hit but will only run when both players have no lives, declaring the winner.

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
   }
  }
});

//switch player is to allow player 2's round to start by clicking on the 'next player' button.  Needed because new score 
//needed to be logged for player 2 without refreshing the page.





