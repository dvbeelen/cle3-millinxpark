const imageWidth = 200; //your desired image width in pixels
const imageHeight = 200; //desired image height in pixels
const collectionID = 4576130; //the collection ID from the original url
const image = document.getElementsByClassName("pickGenre");

fetch(`https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}`)
 .then(data => changeSongPic(data)) 
 function changeSongPic(data){
  console.log(data.url)
 }

