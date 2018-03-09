/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, diceList;

init();

function btn() {
    //Do something here
}
btn();
document.querySelector(".btn-roll").addEventListener("click", function() {
  if(gamePlaying) {
    //Random number
    var dice = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
    // display
    var storedDice = document.querySelector(".dice");
    storedDice.style.display= "block";
    storedDice.src = "dice-" + dice + ".png";
    // update round scoure if roll score != 1
    if (dice !== 1) {
      // add cscore
      roundScore += dice;
      diceList.unshift(dice);
      console.log(diceList);
      document.querySelector("#current-" + activePlayer).textContent = roundScore;
      if (diceList[0] + diceList[1] == 12 ){
        scores[activePlayer] = 0;
        document.querySelector("#score-" + activePlayer).textContent = "0";
        nextPlayer();
        }
    } else {
      //next
      nextPlayer();
    }
  }
});

document.querySelector(".btn-hold").addEventListener("click", function(){
  if(gamePlaying) {
    //add Currentscore to global scores
    scores[activePlayer] += roundScore;
    //Update UI
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
    //did player win?
    if (scores[activePlayer] >= 100) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner!";
      document.querySelector(".dice").style.display = "none";
      document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
      document.querySelector(".player-" + activePlayer + "-panel").classList.remove("winner");
      gamePlaying = false;
    } else {
      //next
      nextPlayer();
    }
  }
});

function nextPlayer() {
  //next
  diceList = [];
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  document.querySelector(".dice").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  scores = [0,0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;
  diceList = [];

  document.querySelector(".dice").style.display = "none";

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
  document.querySelector(".player-1-panel").classList.remove("active");
}
//document.querySelector("#current-" + activePlayer).textContent = dice;
//document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>"

var x = document.querySelector("#score-0").textContent;
console.log(x);
