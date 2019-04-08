const imageWidth = 200; //your desired image width in pixels
const imageHeight = 200; //desired image height in pixel
const images = document.getElementsByClassName("pickGenre");
const genres = ["music,classical", "music,rock", "music,hiphop", "music,videogames"]; //Search terms 
let x = 0

for (i=0; i<4; i++){
fetch(`https://source.unsplash.com/${imageWidth}x${imageHeight}/?${genres[i]}`)
 .then(data => changeSongPic(data))
}

function changeSongPic(data){
    
    images[x].src = data.url;  
    x++
}


