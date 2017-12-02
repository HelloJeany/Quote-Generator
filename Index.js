/*global $ */

// $(document).ready(function(){
//   $('.btn').on('click', function(){
//     var x = quotes.length;
//     var rng = Math.floor(Math.random()*(x-1));
//     $('.quote').html('<h1>"' + quotes.quote + '"</h1>');
//     $('.name').html('<p> -'  + quotes.author + '</p>');
    
//   });

  
  
  
  var quotes = [{
    quote: "One good thing about music, when it hits you, you feel no pain.", 
    author: "Bob Marley",
  },
  {
    quote: "None but ourselves can free our minds",
    author: "Unknown",
  },
  {
    quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "Life is either a great adventure or nothing.",
    author: "Helen Keller",
  },
  {
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  },
  {
    quote: "Every strike brings me closer to the next home run.",
    author: "Babe Ruth",
  },
  {
    quote: "We become what we think about.",
    author: "Earl Nightingale",
  },
  {
    quote: "Winning isn’t everything, but wanting to win is.",
    author: "Vince Lombardi",
  },
  {
    quote: "Every child is an artist.  The problem is how to remain an artist once he grows up.",
    author: "Pablo Picasso",
  },
  {
    quote: "Whatever the mind of man can conceive and believe, it can achieve. ",
    author: "Napoleon Hill",
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einsteinr",
  },
  {
    quote: "I attribute my success to this: I never gave or took any excuse.",
    author: "Florence Nightingale",
  },
  {
    quote: "Life is either a great adventure or nothing.",
    author: "Helen Keller",
  },
  {
    quote: "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
    author: "JK Rowling",
  }];

  document.getElementById("btn").onclick = function() {
    var x = quotes.length;
    var rng = Math.floor(Math.random()*(x-1));
    var quote = document.getElementById("quote").innerHTML = '"' + quotes[rng].quote + '"';
    var author = document.getElementById("name").innerHTML = '-' + quotes[rng].author;
     
  document.getElementById("twitter").onclick = function(){
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + author));
  }
  
}
  

// JavaScript File