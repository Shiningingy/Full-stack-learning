// window.addEventListener('unload', function(event) {
//     var player1Value = Math.floor(Math.random()*6) + 1
//     var player2Value = Math.floor(Math.random()*6) + 1
//     this.document.querySelector(".img1").setAttribute("src","./images/dice" + player1Value +".png")
//     this.document.querySelector(".img2").setAttribute("src","./images/dice" + player1Value +".png")
//   });



if (performance.getEntriesByType("navigation")[0].type == "reload") {
    var player1Value = Math.floor(Math.random()*6) + 1;
    var player2Value = Math.floor(Math.random()*6) + 1;
    this.document.querySelector(".img1").setAttribute("src","./images/dice" + player1Value +".png");
    this.document.querySelector(".img2").setAttribute("src","./images/dice" + player2Value +".png");
    if (player1Value > player2Value){
        this.document.querySelector(".container h1").innerHTML = "Player 1 Wins!";

    } else if (player1Value < player2Value) {
        this.document.querySelector(".container h1").innerHTML = "Player 2 Wins!";
    } else {
        this.document.querySelector(".container h1").innerHTML = "Draw !";
    }
  }