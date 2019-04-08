let gameScore = 0;
let gameEnd = document.getElementById("endGame")

//Adds 150 points to players score every 5 seconds
setInterval(function upScore() {
    gameScore = gameScore + 150;
    document.getElementById("score").innerHTML = gameScore;
  }, 5000);

//Stops the adding of score, gives player endresult
gameEnd.addEventListener("click", function gameEnd(){
    gameScore = gameScore
    document.getElementById("endScore").innerHTML = gameScore
})