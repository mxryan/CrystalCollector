// todo: everything
function pickBtnVals() {
  console.log("pickBtns called");
  var gems = [];
  for (var i = 0; i < 4; i++){
    var gID = "#gem" + i;
    //why am i making this array of objs?
    var tempObj = {
      gemID: gID,
      val: Math.floor(Math.random() * 10 + 1),
      DOMobj: $(gID),
    }
    gems.push(tempObj);
    gems[i].DOMobj.attr("data-val", gems[i].val);
    gems[i].DOMobj.unbind("click");
    gems[i].DOMobj.on("click", (e) => {
      console.log($(e.target.parentNode).attr("data-val"));
      incrementUserScore($(e.target.parentNode).attr("data-val"));
    })
  }
  console.log(gems);
  return gems;
}

function incrementUserScore(amount) {
  var userScoreHTML = $("#user-score");
  var newScore = parseInt(userScoreHTML.text()) + parseInt(amount);
  userScoreHTML.text(newScore);
  if (newScore === targetScore){
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
  console.log("userwins called");
  $("#msg-area").text("You win!")
  pickBtnVals();
  targetScore = setTargetScore();
  resetUserScore();
  var winsHTML = $("#wins");
  var newWins = parseInt(winsHTML.text()) + 1;
  winsHTML.text(newWins);
}

function userLoses() {
  console.log("userLosses called");
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