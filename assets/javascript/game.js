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
  var losses = 0;
  var playerScore = 0;
  var gameNumber = Math.floor(Math.random() * 101 + 19);
  console.log(gameNumber);
  $(".gameNumber").html(gameNumber);
});
