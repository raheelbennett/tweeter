/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



$(document).ready(function() {

  //Add an event listener for submit on new tweet form and prevent its default behaviour.
  $(".tweetForm").submit(function(event) { //check if i can change the name of event in the argument
    event.preventDefault();
    let data = $('form').serialize();
    console.log(data);
    })

  //test data
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];


  //takes in a tweet object and is responsible for returning a tweet <article> element containing the entire HTML structure of the tweet.
  const createTweetElement = function(tweetData) {

    const $tweet = $(`
    <article class="tweet">
    <header>
        <div class="user">
          <img src=${tweetData.user.avatars}>
          <p>${tweetData.user.name}</p>
        </div>
        <p>${tweetData.user.handle}</p>
      </header>
      <p class="text">
        ${tweetData.content.text}
      </p>
      <footer>
        <div class="days">
          ${tweetData.created_at}
        </div>
        <div class="hover-icons">
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-repeat"></i>
          <i class="fa-solid fa-heart"></i>
        </div>
      </footer>    
    </article>
    `);

    return $tweet;
  };

  //taking in an array of tweet objects and then appending each one to the #tweets-container
  const renderTweets = function(tweets) {
    tweets.forEach(tweet => {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').append($tweet);
    });
  };

  renderTweets(data);

});

