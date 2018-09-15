// todo: everything
function pickBtnVals() {
  var gems = [];
  for (var i = 0; i < 4; i++){
    var gID = "#gem" + i;
    var tempObj = {
      gemID: gID,
      val: Math.floor(Math.random() * 10 + 1),
      DOMobj: $(gID),
    }
    gems.push(tempObj);
    gems[i].DOMobj.attr("data-val", gems[i].val);
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
  
  console.log("Current score: ", newScore);
  console.log("incrementUserScore called");
  console.log("Amount: " + amount);
  console.log(userScoreHTML);
  userScoreHTML.text(newScore);

}

pickBtnVals();