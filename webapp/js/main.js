let gameScore = 690;

//API connection
import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
  applicationId: "3fea5ddfe37456e9398935c41ba6ec2d556d70aea53af1ddc80279ae9c1f8a1f",
  secret: "3477463452e420e5b643184c1c2cdd2835464b892ab7bb2eccb9cd4754a1e7e4"
});


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

        let score = document.getElementById("score").innerHTML = gameScore;
    }
