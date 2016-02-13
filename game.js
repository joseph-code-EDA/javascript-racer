
// DO NOT UNDERSTAND THIS:
document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('keyup',run,false);
});


function run(e) {
  var car1 = document.getElementById('p1'); // adds p1 car as "player1"
  var car2 = document.getElementById('p2'); // adds p2 car as "player2"
  if(e.keyCode === 65){ // if 'A' Key is pushed
    updatePlayerPosition(car1); // p1 car movement is updated
  } else if (e.keyCode ===76){ // if 'L' Key is pushed
    updatePlayerPosition(car2); // p2 car movement is updated
  }
}

function updatePlayerPosition (player){
    player.style.marginLeft = String(parseInt(player.style.marginLeft) + 3) + "%"; // span of travel
    
    if (parseInt(player.style.marginLeft) >= 89){ //length to reach end
      document.removeEventListener('keyup',run); // hit end of track
      var result = document.querySelector("#winner");
      result.style.display = "block";
      result.querySelector(".playerWhoWon").innerHTML = player.getAttribute("alt") + "Wins";
    }
}

function reset(){
    document.addEventListener('keyup',run);
    
    var result = document.querySelector("#winner");
    
    result.style.display = "none";
    
    document.querySelector("#playArea").style.opacity = 1;
      
    var players = document.querySelectorAll(".player");
    
    for(var i=0; i < players.length; i++){
      players[i].style.marginLeft='2%';
    }
}

// Toggle Game Music Volume
var bgMusic = document.getElementById("raceMusic"); // adds race music from HTML
function toggle(button){ // creates music button
  if(button.value=="LOUD"){ // if the volume is already LOUD
      button.value="SOFT"; // volume will be turned to SOFT
      bgMusic.volume = 0.2; // and volume set to 20% of full volume
  } else {                  // however if volume is already SOFT
      button.value="LOUD";  // volume will be turned back to LOUD
      bgMusic.volume = 1; // and set to 100% full volume
  }
}

// Key Configuration
var p1Rev = document.getElementById("p1Rev"); // adds p1 rev music from HTML
var p2Rev = document.getElementById("p2Rev"); // adds p2 rev music from HTML
var raceStart = document.getElementById("raceChime"); // adds 'S' key (start) music
onkeyup = function(e){ // when the follow keys are pushed down and then released
    if(e.keyCode == 65){ // 'A' key - p1
        p1Rev.play() // play p2 rev sound
    } else if (e.keyCode == 76){ // 'L' key - p2
        p2Rev.play() // play p2 rev sound
    } else if (e.keyCode == 83){ // 'S' key - start
        raceStart.play() // play race start music
    } else if (e.keyCode == 88){  // 'X' key - exit
        document.location = "index.html"; // exit game to splashscreen
    } else if (e.keyCode == 82){ // 'R' key - reset
        document.location = "game.html"; // current page will reload
    }
}