$(document).ready(function() {
  $("#wordPlay").submit(function(event) {
    event.preventDefault();

    var userSentence = $("#userInput").val().split(" ");
    var userLenghtArray = [];

    userSentence.map(function(sentence) {
      if (sentence.length > 3) {
        userLenghtArray.push(sentence);
      }
    });

    var returnArray = userLenghtArray.reverse().join(" ");

    $("#results").append(returnArray);
  });
});
