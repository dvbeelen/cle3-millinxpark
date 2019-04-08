const imageWidth = 200; //your desired image width in pixels
const imageHeight = 200; //desired image height in pixels
const collectionID = 4576130; //the collection ID from the original url
const genres = ["music,classical", "music,rock", "music,hiphop", "music,videogames"]; //Search terms 

fetch(`https://source.unsplash.com/${imageWidth}x${imageHeight}/?${genres[0]}`)
    .then(data => changeSongPic(data))
        function changeSongPic(data){
        document.getElementsByClassName("pickGenre"[0]).src = data.url;
}

fetch(`https://source.unsplash.com/${imageWidth}x${imageHeight}/?${genres[1]}`)
    .then(data => changeSongPic(data))
        function changeSongPic(data){
        document.getElementsByClassName("pickGenre"[1]).src = data.url;
}

fetch(`https://source.unsplash.com/${imageWidth}x${imageHeight}/?${genres[2]}`)
    .then(data => changeSongPic(data))
        function changeSongPic(data){
        document.getElementsByClassName("pickGenre"[2]).src = data.url;
}

fetch(`https://source.unsplash.com/${imageWidth}x${imageHeight}/?${genres[3]}`)
    .then(data => changeSongPic(data))
        function changeSongPic(data){
        document.getElementsByClassName("pickGenre"[3]).src = data.url;
}
//  .then(data => changeSongPic(data))
// for (i=0; i<genres.length; i++){
// fetch(`https://source.unsplash.com/${imageWidth}x${imageHeight}/?${genres[i]}`)
//  .then(data => changeSongPic(data))
//  function changeSongPic(data){
//        document.getElementsByClassName("pickGenre"[i]) = data.url;
//        console.log(data);
//   }
//  }
 
