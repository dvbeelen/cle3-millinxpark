let gameScore = 0;
let gameEnd = document.getElementById("endGame");
let gameSong = document.getElementsByClassName("gameSong");
let pickGenre = document.getElementsByClassName("pickGenre");
let p = 0;

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

//When players chooses song in the songSelect-screen, that choice is saved and stored on the game- and resultscreen
function saveChoice(){
  if (p == 1){
    gameSong[0].src = pickGenre[0].src;
    gameSong[1].src = pickGenre[0].src;
    console.log(p);
  } else if (p == 2){
    gameSong[0].src = pickGenre[1].src;
    gameSong[1].src = pickGenre[1].src;
    console.log(p);
  } else if (p == 3){
    gameSong[0].src = pickGenre[2].src;
    gameSong[1].src = pickGenre[2].src;
    console.log(p);
  } else if (p == 4){
    gameSong[0].src = pickGenre[3].src;
    gameSong[1].src = pickGenre[3].src;
    console.log(p);
  }
}

