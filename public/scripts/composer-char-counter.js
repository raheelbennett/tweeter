$(document).ready(function() {

  //with help from mentor. This is not my own code.
  $("#tweet-text").on("input", function() {

    const counter = $(this).val().length;
    const remaining = 140 - counter;
    
    $(".counter").text(remaining);

    //to turn character counter red, we can use js to handle the logic and create a temp class for css to use
    if (remaining < 0) {
      $(".counter").addClass("num-red");
    } else {
      $(".counter").removeClass("num-red");
    }

  });

});