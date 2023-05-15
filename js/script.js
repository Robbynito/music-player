const songs = [
  {
   title: "Black",
   artist: "Okkervil River",
   image:`url(assets/Black Cover.png)`,
   song: "Black.mp3"
  },
  {
    title: "Dancing",
    artist: "Sonic Sea Turtles",
    image:`url(assets/Dancing Cover.png)`,
    song: "Dancing.mp3"
   },
   {
    title: "Happiness In Liquid Form",
    artist: "Alfie Templeton",
    image:`url(assets/Happiness In Liquid Form Cover.png)`,
    song: "Happiness In Liquid Form.mp3"
   },
   {
    title: "I Needed Love",
    artist: "Under the Rug",
    image:`url(assets/I Needed Love Cover.png)`,
    song: "I Needed Love.mp3"
   },
   {
    title: "Lose Your Soul",
    artist: "Dead Man's Bones",
    image:`url(assets/Lose Your Soul Cover.png)`,
    song: "Lose Your Soul.mp3"
   },
   {
    title: "Low",
    artist: "egg",
    image:`url(assets/Low Cover.png)`,
    song: "Low.mp3"
   },
   {
    title: "Medicine",
    artist: "Matt Berry",
    image:`url(assets/Medicine Cover.png)`,
    song: "Medicine.mp3"
   },
   {
    title: "Notre Dame",
    artist: "Paris Paloma",
    image:`url(assets/Notre Dame Cover.png)`,
    song: "notre dame.mp3"
   },
   {
    title: "Photo ID",
    artist: "Remi Wolf and Dominick Fike",
    image:`url(assets/Photo ID Cover.png)`,
    song: "Photo ID.mp3"
   },
   {
    title: "Running Up That Hill",
    artist: "Meg Meyers",
    image:`url(assets/Running Up That Hill Cover.png)`,
    song: "Running Up That Hill.mp3"
   },
   {
    title: "Rx",
    artist: "Your Neighbors",
    image:`url(assets/Rx Cover.png)`,
    song: "Rx.mp3"
   },
   {
    title: "Silver Platters",
    artist: "Les Gold",
    image:`url(assets/Silver Platters Cover.png)`,
    song: "Silver Platters.mp3"
   },
   {
    title: "The Love Club",
    artist: "Lorde",
    image:`url(assets/The Love Club Cover.png)`,
    song: "The Love Club.mp3"
   },
   {
    title: "The Story I Heard",
    artist: "Blind Pilot",
    image:`url(assets/The Story I Heard Cover.png)`,
    song: "The Story I Heard.mp3"
   },
   {
    title: "Visitor",
    artist: "Of Monsters and Men",
    image:`url(assets/Visitor Cover.png)`,
    song: "Visitor.mp3"
   }
];
const songTitle = document.querySelector('songTitle');
const artist = document.querySelector('artist');
const albumCover = document.querySelector('albumCover');

songTitle.innerHTML = "Test.";
artist.innerHTML = "Test";
albumCover.style.backgroundImage= 'url(/assets/mountain.jpg)';

/*
 * Navigate to Items with Event Listeners
 * Track Number of Items
*/
// initialize item number
let itemNumber = 0;
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
  if ( itemNumber > data.length -1 ) {
    // reset counting to first item
    itemNumber = 0;
  }

  // display data based on array index
  songTitle.innerHTML = data[itemNumber].title;
  artist.innerHTML = data[itemNumber].artist;
  albumCover.style.backgroundImage = data[itemNumber].image;
  
});
  
// listen for clicks on previous button
prevButton.addEventListener("click", () => {
  // update, then DEcrease item number with each click
  itemNumber = itemNumber - 1;
  
  // if at FIRST item
  if ( itemNumber < 0 ) {
    // reset counting to last item
    itemNumber = data.length -1;
  }  
  
  // display data based on array index
  songTitle.innerHTML = data[itemNumber].title;
  artist.innerHTML = data[itemNumber].artist;
  albumCover.style.backgroundImage = data[itemNumber].image;
});

// listen for clicks on random button
randButton.addEventListener('click', () => {
  
  // generate random number, for total number, of items (data)
  randomNumber = Math.floor ( Math.random() * data.length );
  
  // display data based random number
  songTitle.innerHTML = data[randomNumber].title;
  artist.innerHTML = data[randomNumber].artist;
  albumCover.style.backgroundImage = data[randomNumber].image;
  
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
  if ( itemNumber > data.length -1 ) {
    // reset counting to first item
    itemNumber = 0;
  }

  // display data based on array index
  songTitle.innerHTML = data[itemNumber].title;
  artist.innerHTML = data[itemNumber].artist;
  albumCover.style.backgroundImage = data[itemNumber].image;
    
  }
  
  // Prev Left Arrow
  if ( event.key === "ArrowLeft" ) {
  
   // update, then DEcrease item number with each click
  itemNumber = itemNumber - 1;
  
  // if at FIRST item
  if ( itemNumber < 0 ) {
    // reset counting to last item
    itemNumber = data.length -1;
  }  
  
  // display data based on array index
  songTitle.innerHTML = data[itemNumber].title;
  artist.innerHTML = data[itemNumber].artist;
  albumCover.style.backgroundImage = data[itemNumber].image;
  }
  
  // Random Spacebar
  if ( event.key === " ") {
    
    // generate random number, for total number, of items (data)
    randomNumber = Math.floor ( Math.random() * data.length );

    // display data based random number
    songTitle.innerHTML = data[randomNumber].title;
    artist.innerHTML = data[randomNumber].artist;
    albumCover.style.backgroundImage = data[randomNumber].image;
  
  }
  
});