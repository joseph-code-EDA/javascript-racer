// Audio
var audio = new Audio('splash.mp3');
audio.play();

// Spacebar
document.onkeyup = function(e){
    if(e.keyCode == 32){
        document.location = "game.html";
    } else {
    	e = false;
    }
}