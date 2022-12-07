

$(document).ready(function() {

//with help from mentor. This is not my own code.
$("#tweet-text").on("input", function () {
  const counter = $(this).val().length;
  const remaining = 140 - counter;
  // console.log(this.text())
  $(".counter").text(remaining)  

  if (remaining < 0) {
    $(".counter").css("color", "red")
  } else {
    $(".counter").css("color", "black")
  }

  })

  
});