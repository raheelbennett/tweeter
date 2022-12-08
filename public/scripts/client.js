/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



$(() => {

  //takes in a tweet object and is responsible for returning a tweet <article> element containing the entire HTML structure of the tweet.
  const createTweetElement = function (tweetData) {
     
    //function to escape some text typed in as a tween that can be malicious, and then use it inside .html() or $() 
    const escape = function (str) {
      let div = document.createElement("div");
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    };

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
        ${escape(tweetData.content.text)}
      </p>
      <footer>
        <div class="days">
          ${timeago.format(tweetData.created_at)}
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
  const renderTweets = function (tweets) {
    tweets.forEach(tweet => {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').prepend($tweet);
    });
  };


  //The loadtweets function will use jQuery to make a request to /tweets and receive the array of tweets as JSON.
  //Then we can just pass in the JSON response to the renderTweets functoin
  const loadTweets = function () {
    $.ajax("/tweets", { method: "GET" })
      .then((response) => {
        renderTweets(response);

      });
  };

  loadTweets();

  const displayLastTweet = function () {
    $.ajax("/tweets", { method: "GET" })
      .then((response) => {
        const $tweet = createTweetElement(response[response.length - 1]);
      $('#tweets-container').prepend($tweet)
      })
  }

  //Add an event listener for submit on new tweet form and prevent its default behaviour.
  //Use the jQuery library to submit a POST request that sends the serialized data to the server
  $(".tweetForm").on("submit", function (event) {
    event.preventDefault();
    const textbox = $("#tweet-text").val().trim();
    if (!textbox) {
      $(".err").text("Cannot submit an empty tweet");
      $(".err").addClass('error');
      return setTimeout(()=> {
        $(".err").removeClass('error');
        $(".err").text("");
      },3000);
    }
    else if (textbox.length > 140) {
      $(".err").text("Maximum characters exceeded");
      $(".err").addClass('error');
      return setTimeout(()=> {
        $(".err").removeClass('error');
        $(".err").text("");
    },3000);
    
    }
    //let tweetText = $('form').serialize(); will also work 
    //upon successfully post new tweets will load on top without page refresh and textbox will clear as well.
    const tweetText = $(this).serialize();
    $.ajax("/tweets", {
      method: "POST",
      data: tweetText
    })
      .then(() => {
        $("#tweet-text").val("");
        $(".counter").text("140");
        displayLastTweet();      

      });
  });




});
