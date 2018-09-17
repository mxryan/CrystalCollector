function pickBtnVals() {
  for (var i = 0; i < 4; i++) {
    var gID = "#gem" + i;
    var val = Math.floor(Math.random() * 10 + 1);
    var DOMobj = $(gID)
    DOMobj.attr("data-val", val);
    DOMobj.unbind("click");
    DOMobj.on("click", (e) => {
      var x = parseInt($(e.target.parentNode).attr("data-val"));
      // for some reason x occasionally evaluates to NaN
      if (isNaN(x)) {
        return;
      } else {
        incrementUserScore(x);
      }
    })
  }
}

function incrementUserScore(amount) {
  var userScoreHTML = $("#user-score");
  var newScore = parseInt(userScoreHTML.text()) + parseInt(amount);
  userScoreHTML.text(newScore);
  $("#msg-area").text("");
  if (newScore === targetScore) {
    userWins();
  } else if (newScore > targetScore) {
    userLoses();
  }
}

function setTargetScore() {
  var val = Math.floor(Math.random() * 100 + 20);
  var targetScoreHTML = $("#target-score");
  targetScoreHTML.text(val)
  return val;
}

function userWins() {
  $("#msg-area").text("You win!")
  pickBtnVals();
  targetScore = setTargetScore();
  resetUserScore();
  var winsHTML = $("#wins");
  var newWins = parseInt(winsHTML.text()) + 1;
  winsHTML.text(newWins);
}

function userLoses() {
  $("#msg-area").text("You lose");
  pickBtnVals();
  targetScore = setTargetScore();
  resetUserScore();
  var lossesHTML = $("#losses");
  var newLosses = parseInt(lossesHTML.text()) + 1;
  lossesHTML.text(newLosses);
}

function resetUserScore() {
  $("#user-score").text("0");
}

pickBtnVals();
var targetScore = setTargetScore();
