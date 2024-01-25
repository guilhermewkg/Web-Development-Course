var player1 = Math.round(Math.random() * 5) + 1;
var player2 = Math.round(Math.random() * 5) + 1;
document.getElementsByClassName("img1")[0].src = "./images/dice"+ player1 +".png";;
document.getElementsByClassName("img2")[0].src = "./images/dice"+ player2 +".png";;

if(player1 > player2) {
    document.getElementsByTagName("h1")[0].innerHTML = "Player 1 Wins!";
} else if(player2 > player1) {
    document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Wins!";
} else {
    document.getElementsByTagName("h1")[0].innerHTML = "Draw!";
}
