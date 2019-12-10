var targetScore;
var userScore;
var crystal1;
var crystal2;
var crystal3;
var crystal4;
var win = 0;
var losses = 0;
function startGame() {
  targetScore = Math.floor(Math.random() * 102) + 19;
  userScore = 0;
  crystal1 = Math.floor(Math.random() * 12) + 1;
  crystal2 = Math.floor(Math.random() * 12) + 1;
  crystal3 = Math.floor(Math.random() * 12) + 1;
  crystal4 = Math.floor(Math.random() * 12) + 1;
  $("#TargetScore").text(targetScore);
  $("#userScore").text(userScore);
}
startGame();
$("#crystal1").on("click", function() {
  userScore = userScore + crystal1;
  checkScore();
});
function checkScore() {
  $("#userScore").text(userScore);
  if (userScore === targetScore) {
    alert("you won");
    win++;
    $("#win").text("win;" + win);
    startGame();
  }

  if (userScore > targetScore) {
    alert("you loose");
    losses++;
    $("#losses").text("losses;" + losses);
    startGame();
  }
}
$("#crystal2").on("click", function() {
  userScore = userScore + crystal2;
  checkScore();
});
$("#crystal3").on("click", function() {
  userScore = userScore + crystal3;
  checkScore();
});
$("#crystal4").on("click", function() {
  userScore = userScore + crystal4;
  checkScore();
});
