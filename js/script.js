const songs = [
  {
   title: "Black",
   artist: "Okkervil River",
   image:`url("../assets/Black Cover.png")`,
   song: "../assets/songs/Black.mp3",
   color: "#BB9203C"
  },
  {
    title: "Dancing",
    artist: "Sonic Sea Turtles",
    image:`url("../assets/Dancing Cover.png")`,
    song: "../assets/songs/Dancing.mp3",
    color: "#06C367"
   },
   {
    title: "Happiness In Liquid Form",
    artist: "Alfie Templeton",
    image:`url("../assets/Happiness In Liquid Form Cover.png")`,
    song: "../assets/songs/Happiness In Liquid Form.mp3",
    color: "#D84295"
   },
   {
    title: "I Needed Love",
    artist: "Under the Rug",
    image:`url("../assets/I Needed Love Cover.png")`,
    song: "../assets/songs/I Needed Love.mp3",
    color: "#C6B196"
   },
   {
    title: "Lose Your Soul",
    artist: "Dead Man's Bones",
    image:`url("../assets/Lose Your Soul Cover.png")`,
    song: "../assets/songs/Lose Your Soul.mp3",
    color: "#320104"
   },
   {
    title: "Low",
    artist: "egg",
    image:`url("../assets/Low Cover.png")`,
    song: "../assets/songs/Low.mp3",
    color: "#21031F"
   },
   {
    title: "Medicine",
    artist: "Matt Berry",
    image:`url("../assets/Medicine Cover.png")`,
    song: "../assets/songs/Medicine.mp3",
    color: "#2F2A26"
   },
   {
    title: "Notre Dame",
    artist: "Paris Paloma",
    image:`url("../assets/Notre Dame Cover.png")`,
    song: "../assets/songs/notre dame.mp3",
    color: "#050E2B"
   },
   {
    title: "Photo ID",
    artist: "Remi Wolf and Dominick Fike",
    image:`url("../assets/Photo ID Cover.png")`,
    song: "../assets/songs/Photo ID.mp3",
    color: "#FE2920"
   },
   {
    title: "Running Up That Hill",
    artist: "Meg Meyers",
    image:`url("../assets/Running Up That Hill Cover.png")`,
    song: "../assets/songs/Running Up That Hill.mp3",
    color: "#C1BAA7"
   },
   {
    title: "Rx",
    artist: "Your Neighbors",
    image:`url("../assets/Rx Cover.png")`,
    song: "../assets/songs/Rx.mp3",
    color: "#8AADB8"
   },
   {
    title: "Silver Platters",
    artist: "Les Gold",
    image:`url("../assets/Silver Platters Cover.png")`,
    song: "../assets/songs/Silver Platters.mp3",
    color: "#B2B9C4"
   },
   {
    title: "The Love Club",
    artist: "Lorde",
    image:`url("../assets/The Love Club Cover.png")`,
    song: "../assets/songs/The Love Club.mp3",
    color: "#A86062"
   },
   {
    title: "The Story I Heard",
    artist: "Blind Pilot",
    image:`url("../assets/The Story I Heard Cover.png")`,
    song: "../assets/songs/The Story I Heard.mp3",
    color: "#142B35"
   },
   {
    title: "Visitor",
    artist: "Of Monsters and Men",
    image:`url("../assets/Visitor Cover.png")`,
    song: "../assets/songs/Visitor.mp3",
    color: "#1E1E1E"
   }
];
const songTitle = document.querySelector('#songTitle');
const artist = document.querySelector('#artist');
const albumCover = document.querySelector('#albumCover');
const bgrdColor = document.querySelector('body')

songTitle.innerHTML = "Test.";
artist.innerHTML = "Test";
albumCover.style.backgroundImage= 'url(../assets/mountain.jpg)';

/*
 * Navigate to Items with Event Listeners
 * Track Number of Items
*/
// initialize item number
let itemNumber = 0;
let isPlaying = false;
let currentSong = document.createElement('audio')
// get next button
const nextButton = document.querySelector("img.next");
// get previous button
const prevButton = document.querySelector("img.prev");
// get random button
const randButton = document.querySelector("img.random");

// listen for clicks on next button
nextButton.addEventListener("click", () => {
  // update, then increase item number with each click
  itemNumber = itemNumber + 1;
  
  // if at LAST item
  if ( itemNumber > songs.length -1 ) {
    // reset counting to first item
    itemNumber = 0;
  }

  // display data based on array index
  songTitle.innerHTML = songs[itemNumber].title;
  artist.innerHTML = songs[itemNumber].artist;
  albumCover.style.backgroundImage = songs[itemNumber].image;
  bgrdColor.style.backgroundColor = songs[itemNumber].color;
  currentSong.src = songs[itemNumber].song;
  currentSong.load(itemNumber);
  currentSong.play();
  isPlaying = true
  
});
  
// listen for clicks on previous button
prevButton.addEventListener("click", () => {
  // update, then DEcrease item number with each click
  itemNumber = itemNumber - 1;
  
  // if at FIRST item
  if ( itemNumber < 0 ) {
    // reset counting to last item
    itemNumber = songs.length -1;
  }  
  
  // display data based on array index
  songTitle.innerHTML = songs[itemNumber].title;
  artist.innerHTML = songs[itemNumber].artist;
  albumCover.style.backgroundImage = songs[itemNumber].image;
  bgrdColor.style.backgroundColor = songs[itemNumber].color;
});

// listen for clicks on random button
randButton.addEventListener('click', () => {
  
  // generate random number, for total number, of items (data)
  randomNumber = Math.floor ( Math.random() * songs.length );
  
  // display data based random number
  songTitle.innerHTML = songs[randomNumber].title;
  artist.innerHTML = songs[randomNumber].artist;
  albumCover.style.backgroundImage = songs[randomNumber].image;
  bgrdColor.style.backgroundColor = songs[itemNumber].color;
  
});

// listen for keypress next
document.addEventListener('keyup', (event) => {
  
  // check-check: What key was pressed?
  // console.log(event);

  // Next Right Arrow  
  if ( event.key === "ArrowRight" ) {
   
   // update, then increase item number with each click
  itemNumber = itemNumber + 1;
  
  // if at LAST item
  if ( itemNumber > songs.length -1 ) {
    // reset counting to first item
    itemNumber = 0;
  }

  // display data based on array index
  songTitle.innerHTML = songs[itemNumber].title;
  artist.innerHTML = songs[itemNumber].artist;
  albumCover.style.backgroundImage = songs[itemNumber].image;
  bgrdColor.style.backgroundColor = songs[itemNumber].color;
    
  }
  
  // Prev Left Arrow
  if ( event.key === "ArrowLeft" ) {
  
   // update, then DEcrease item number with each click
  itemNumber = itemNumber - 1;
  
  // if at FIRST item
  if ( itemNumber < 0 ) {
    // reset counting to last item
    itemNumber = songs.length -1;
  }  
  
  // display data based on array index
  songTitle.innerHTML = songs[itemNumber].title;
  artist.innerHTML = songs[itemNumber].artist;
  albumCover.style.backgroundImage = songs[itemNumber].image;
  bgrdColor.style.backgroundColor = songs[itemNumber].color;
  }
  
  // Random Spacebar
  if ( event.key === " ") {
    
    // generate random number, for total number, of items (data)
    randomNumber = Math.floor ( Math.random() * songs.length );

    // display data based random number
    songTitle.innerHTML = songs[randomNumber].title;
    artist.innerHTML = songs[randomNumber].artist;
    albumCover.style.backgroundImage = songs[randomNumber].image;
    bgrdColor.style.backgroundColor = songs[itemNumber].color;
  
  }
  
});