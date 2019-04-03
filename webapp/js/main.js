function pickSong() {
    const currentDiv = document.getElementById('slide-4');
    const nextDiv = document.getElementById('songSelect');
    const clone = nextDiv.cloneNode(true);

    while (currentDiv.firstChild) currentDiv.firstChild.remove();

    currentDiv.appendChild(clone);
}
 
 function gameStart() {
        const currentDiv = document.getElementById('songSelect');
        const nextDiv = document.getElementById('game');
        const clone = nextDiv.cloneNode(true);
    
        while (currentDiv.firstChild) currentDiv.firstChild.remove();
    
        currentDiv.appendChild(clone);
    }

let field = document.getElementById("quote"); 

fetch("https://api.kanye.rest")
    .then(data => data.json())
    .then(data => showQuote(data))
    .catch(error => console.log(error))

function showQuote(data){
    field.innerHTML = data.quote
}


