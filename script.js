var pattern = [];
var gamePlaying = false;
var tonePlaying = false;
var progress = 0;
var volume = 0.5; // ranges from 0.0 to 1.0
const clueHoldTime = 1500; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
var guessCounter = 0;
var mistakes = 0;
var buttonTypes = ["cow", "sheep", "horse", "dog", "cat", "rooster"];

// THESE ALL CONTROL START/STOP/PAUSE/UNPAUSE BUTTONS

function startGame(){
  // Starts the game anew
  progress = 0;
  mistakes = 0;
  for (var i = 0; i < 8; i++){
    var int = Math.floor(Math.random() * 6) + 1;
    pattern.push(int);
  }
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("pauseBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
  // Resets the pattern array to be empty so the game can be restarted later 
  pattern = [];
  gamePlaying = false;
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("pauseBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
  
}

function pauseGame(){
  // Pauses the game if the user wants a temporary break 
  gamePlaying = false;
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("pauseBtn").classList.add("hidden");
  document.getElementById("unpauseBtn").classList.remove("hidden");
  
}

function unpauseGame(){
  // Unpauses the game once the user finishes their break 
  gamePlaying = true;
  document.getElementById("unpauseBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("pauseBtn").classList.remove("hidden");
  playClueSequence();
}


// CONTROL THE SOUNDS THAT THE GAME BUTTONS PLAY
const freqMap = {
  1: "cowSound",
  2: "sheepSound",
  3: "horseSound",
  4: "dogSound",
  5: "catSound",
  6: "roosterSound"
}
function playTone(btn){ 
  document.getElementById(freqMap[btn]).play();
}
function startTone(btn){
  if(!tonePlaying){
    document.getElementById(freqMap[btn]).play();
    tonePlaying = true;
  }
}
function stopTone(btn){
  document.getElementById(freqMap[btn]).pause(); 
  document.getElementById(freqMap[btn]).currentTime = 0;
  tonePlaying = false;
}


// CONTROL THE GAME BUTTON LIGHTS
function lightButton(btn){
  console.log(buttonTypes[btn-1]+"Button");
  document.getElementById(buttonTypes[btn-1]+"Button").classList.add("lit")
}
function clearButton(btn){
  document.getElementById(buttonTypes[btn-1]+"Button").classList.remove("lit")
}


// COMPUTER'S CLUE SEQUENCES
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  document.getElementById("strikes").innerHTML = "Strikes: " + mistakes;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  guessCounter = 0; // resets counter for next round
}


// END RESULT HANDLERS
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

// GUESSES HANDLER
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  else if(pattern[guessCounter] == btn){
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        winGame();
      }
      else{
        progress++;
        playClueSequence();
      }
    }
    else{
      guessCounter++;
    }
  }
  else{
    if (mistakes < 2){
      mistakes++;
      playClueSequence();
    }
    else{
      mistakes = 3;
      document.getElementById("strikes").innerHTML = "Strikes: " + mistakes;
      loseGame();
    }
  }
}