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
  $("#p1").html(wins);
  var losses = 0;
  $("#p2").html(losses);
  var playerScore = 0;
  var gameNumber = Math.floor(Math.random() * 101 + 19);
  console.log(gameNumber);
  $(".gameNumber").html(gameNumber);

  $("#c1").on("click", function() {
    playerScore += c1;
    $(".score").html(playerScore);
    if (playerScore == gameNumber) {
      wins++;
      $("#p1").html(wins);
    }
    if (playerScore > gameNumber) {
      losses++;
      $("#p2").html(losses);
    }
  });

  $("#c2").on("click", function() {
    playerScore += c2;
    $(".score").html(playerScore);
    if (playerScore == gameNumber) {
      wins++;
      $("#p1").html(wins);
    }
    if (playerScore > gameNumber) {
      losses++;
      $("#p2").html(losses);
    }
  });

  $("#c3").on("click", function() {
    playerScore += c3;
    $(".score").html(playerScore);
    if (playerScore == gameNumber) {
      wins++;
      $("#p1").html(wins);
    }
    if (playerScore > gameNumber) {
      losses++;
      $("#p2").html(losses);
    }
  });

  $("#c4").on("click", function() {
    playerScore += c4;
    $(".score").html(playerScore);
    if (playerScore == gameNumber) {
      wins++;
      $("#p1").html(wins);
    }
    if (playerScore > gameNumber) {
      losses++;
      $("#p2").html(losses);
    }
  });
});
