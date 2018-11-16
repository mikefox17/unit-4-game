$(document).ready(function() {
  console.log("ready!");

  var c1 = Math.floor(Math.random() * 11 + 1);
  console.log(c1);
  var c2 = Math.floor(Math.random() * 11 + 1);
  console.log(c2);
  var c3 = Math.floor(Math.random() * 11 + 1);
  console.log(c3);
  var c4 = Math.floor(Math.random() * 11 + 1);
  console.log(c4);
  var wins = 0;
  $("#p1").html("Wins:", +wins);
  var losses = 0;
  $("#p2").html("Losses:", +losses);
  var playerScore = 0;
  var gameNumber = Math.floor(Math.random() * 101 + 19);
  console.log(gameNumber);
  $(".gameNumber").html(gameNumber);

  function reset() {
    c1 = Math.floor(Math.random() * 11 + 1);
    c2 = Math.floor(Math.random() * 11 + 1);
    c3 = Math.floor(Math.random() * 11 + 1);
    c4 = Math.floor(Math.random() * 11 + 1);
    playerScore = 0;
    $(".score").html(playerScore);
    gameNumber = Math.floor(Math.random() * 101 + 19);
    $(".gameNumber").html(gameNumber);
  }

  $("#c1").on("click", function() {
    playerScore += c1;
    $(".score").html(playerScore);
    if (playerScore == gameNumber) {
      wins++;
      $("#p1").html(wins);
      reset();
    }
    if (playerScore > gameNumber) {
      losses++;
      $("#p2").html(losses);
      reset();
    }
  });

  $("#c2").on("click", function() {
    playerScore += c2;
    $(".score").html(playerScore);
    if (playerScore == gameNumber) {
      wins++;
      $("#p1").html(wins);
      reset();
    }
    if (playerScore > gameNumber) {
      losses++;
      $("#p2").html(losses);
      reset();
    }
  });

  $("#c3").on("click", function() {
    playerScore += c3;
    $(".score").html(playerScore);
    if (playerScore == gameNumber) {
      wins++;
      $("#p1").html(wins);
      reset();
    }
    if (playerScore > gameNumber) {
      losses++;
      $("#p2").html(losses);
      reset();
    }
  });

  $("#c4").on("click", function() {
    playerScore += c4;
    $(".score").html(playerScore);
    if (playerScore == gameNumber) {
      wins++;
      $("#p1").html(wins);
      reset();
    }
    if (playerScore > gameNumber) {
      losses++;
      $("#p2").html(losses);
      reset();
    }
  });
});
