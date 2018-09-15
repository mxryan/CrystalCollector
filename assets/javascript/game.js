// assign vals to buttons
// buttons increment score by their assigned values

function pickBtnVals() {
  //create objects, iterate through, add event listeners that
  // take object.val as param.
  
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
    })
    
    
  }
  

  console.log(gems);
  return gems;
}

function incrementUserScore(amount) {
  var userScoreHTML = $("user-score");
  userScoreHTML.text(parseInt(userScoreHTML.text()) + amount);

}

pickBtnVals();