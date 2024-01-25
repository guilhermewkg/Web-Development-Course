var gamePattern = [];
var clickPattern = [];
var order = 0;
var buttonColours = ["red", "blue", "green", "yellow"];
var wrongSound = new Audio("sounds/wrong.mp3");
console.log("alou");
function randomNumber() {
    return Math.floor(Math.random() * 4);;
}
$(document).on("keypress", function (event) {
    if (gamePattern.length > 0) {
        return;
    }
    nextLevel();
})
$(".btn").on("click", function(event) {
    clickAnimation(event.target.id);
    if(gamePattern.length == 0) {
        return;
    }
    var audio = new Audio();
    if(gamePattern.length-1 == order) {
        if (event.target.id != gamePattern[order]) {
            wrongSound.play();
            wrongAnimation();
            gamePattern = [];
            $("h1").text("Game Over, Press Any Key to Restart");
        } else if(event.target.id == gamePattern[order]) {
            correctAnimation();
            setTimeout(function() {nextLevel();}, 1000);
        }
        order = 0;
        return;
    }
    if (event.target.id == gamePattern[order]) {
        order++;
    } else {
        wrongSound.play();
        wrongAnimation();
        order = 0;
        gamePattern = [];
        $("h1").text("Game Over, Press Any Key to Restart");
    }
})
function nextLevel() {
    gamePattern.push(buttonColours[randomNumber()]);
    console.log(gamePattern);
    changeTitle(gamePattern.length);
    setTimeout(function() {
        clickAnimation(gamePattern[gamePattern.length-1]);
    }, 500)
}
function clickAnimation(color) {

    $("#"+color).css("background-color", "gray");
    setTimeout(function() {$("#"+color).css("background-color", color);}, 100);
    $("#"+color).addClass("box-shadow");
    setTimeout(function() {
        $("#"+color).css("background-color", color);
        $("#"+color).removeClass("box-shadow");
    }, 100);
    var audio = new Audio("sounds/"+color+".mp3");
    audio.play();
}
function wrongAnimation() {
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("body").css("background-color", "red");
    setTimeout(function() {$("body").css("background-color", "#011F3F");}, 150);
}
function correctAnimation() {
    var audio = new Audio("sounds/correct.mp3");
    audio.play();
    $("body").css("background-color", "#089000");
    $("h1").text("Correct!");
    setTimeout(function() {
        $("body").css("background-color", "#011F3F");
    }, 150);
}
function changeTitle(levelNumber) {
    $("h1").text("Level "+levelNumber);
}