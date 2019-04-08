let gameScore = 0;

//Slider navigation
//This function brings the user on click from the startscreen to the screen where they can pick a song.
function nextToSongs() {
    const currentDiv = document.getElementById('slide-4');
    const nextDiv = document.getElementById('songSelect');
    const clone = nextDiv.cloneNode(true);

    while (currentDiv.firstChild) currentDiv.firstChild.remove();

    currentDiv.appendChild(clone);
}

//This function brings the user on click from the screen where they can pick a song to the gamescreen.
 function nextToGame() {
        const currentDiv = document.getElementById('songSelect');
        const nextDiv = document.getElementById('game');
        const clone = nextDiv.cloneNode(true);
    
        while (currentDiv.firstChild) currentDiv.firstChild.remove();
    
        currentDiv.appendChild(clone);
        upScore();
    }

setInterval(function upScore() {
    gameScore = gameScore + 150;
    document.getElementById("score").innerHTML = gameScore;
  }, 5000);

