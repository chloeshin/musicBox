var buttonValues = [[false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false]];
checkAllBtns();

setScreen("welcomeScreen");

onEvent("startBtn", "click", function(event) {
  setScreen("playScreen");
});

onEvent("playBtn", "click", function(event) {
  hideElement("playBtn");
  setInterval(barMovement, 4000);
});

function barMovement() {
  for(var i = 0; i < 8; i++) {
    (function(i){
      setTimeout(function(){
        setPosition("bar", 10, 28+50*i, 300, 40);
        if (buttonValues[0][i] === true) {
          playSound("assets/1b.mp3");
        }
        if (buttonValues[1][i] === true) {
          playSound("assets/2b.mp3");
        }
        if (buttonValues[2][i] === true) {
          playSound("assets/3b.mp3");
        }
        if (buttonValues[3][i] === true) {
          playSound("assets/4b.mp3");
        }
        if (buttonValues[4][i] === true) {
          playSound("assets/5b.mp3");
        }
        if (buttonValues[5][i] === true) {
          playSound("assets/6b.mp3");
        }
      },500*i);
    }(i));
  }
}

function checkAllBtns () {
  for (var i = 0; i < 8; i++) {
    var cId = "cBtn"+(i+1);
    turnBtnOn(cId,i,0);
  }
  for (var j = 0; j < 8; j++) {
    var dId = "dBtn"+(j+1);
    turnBtnOn(dId,j,1);
  }
  for (var k = 0; k < 8; k++) {
    var eId = "eBtn"+(k+1);
    turnBtnOn(eId,k,2);
  }
  for (var l = 0; l < 8; l++) {
    var gId = "gBtn"+(l+1);
    turnBtnOn(gId,l,3);
  }
  for (var m = 0; m < 8; m++) {
    var aId = "aBtn"+(m+1);
    turnBtnOn(aId,m,4);
  }
  for (var n = 0; n < 8; n++) {
    var hcId = "hcBtn"+(n+1);
    turnBtnOn(hcId,n,5);
  }
}

function turnBtnOn (id, arrayNum, arrayPos) {
  var idgrey = id+"o";
  onEvent(id, "click", function(event){
    if (buttonValues[arrayPos][arrayNum] === false){
      buttonValues[arrayPos][arrayNum] = true;
      showElement(idgrey);
      hideElement(id);
      console.log(buttonValues[arrayPos][arrayNum]);
  }
});
  onEvent(idgrey, "click", function(event){
    if (buttonValues[arrayPos][arrayNum] === true){
      buttonValues[arrayPos][arrayNum] = false;
      hideElement(idgrey);
      showElement(id);
      console.log(buttonValues[arrayPos][arrayNum]);
    }
});
}


