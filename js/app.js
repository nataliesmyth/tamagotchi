// ---------- VARIABLES ---------- //
let startGameButton = document.getElementById('startGame');
let timerPlaceholder = document.getElementById("timer");
let egg = document.getElementById('egg')
let bird = document.getElementById('bird')
bird.hidden = true;
// Start values
let time = 0;
let hungry = 0;
let sleep = 0;
let play = 0;

// hunger elements
let hungryButton = document.getElementById('hungry');
let hungryTimerPlaceholder = document.getElementById("hungryTimer");

// sleep elements
let lightsOutButton = document.getElementById('sleep');
let sleepTimerPlaceholder = document.getElementById("sleepTimer");

// bored elements
let playTimeButton = document.getElementById('play');
let playTimerPlaceholder = document.getElementById("playTimer");


// Class
class Tamagotchi {
  constructor(name, hunger, sleepiness, boredom, age) {
    this.name = name || 'My Tamagotchi';
    this.creatureType = 'tamagotchi';
    this.hunger = 0;
    this.sleepiness = 0;
    this.boredom = 0;
    this.age = 0; 
  }
  // code here ends up on prototype
  // Instance methods
  play() {
    this.boredom -= 1;
  }

  feed() {
    this.hunger -= 1;
  }

  turnOff() {
    this.sleepiness -= 1;
  }
}

// Class instantiation
const tama1 = new Tamagotchi(0, 0, 0, 0);
console.log(tama1);

// ---------- FUNCTIONS ---------- //
function handleStartGame () {
  // user input is saved in name variable
  let name = prompt("What is your pet's name?");
  let namePlaceHolder = document.getElementById('name');
  namePlaceHolder.textContent = `name: ${name}`;
  startGameButton.remove()
  bird.hidden = false;
  egg.hidden = true;
  startTimer();
  startHungryTimer();
  startSleepTimer();
  startPlayTimer();
  

}

//  handle FNS tell timer what to do when button is clicked
function handleHungry () {
  // 
  if (hungry > 0 && hungry < 10 && time < 18) {
    hungry--;
    hungryTimerPlaceholder.textContent = `hunger: ${hungry}`;
  }
}

function handleLightsOut () {
  if (sleep > 0 && sleep < 8 && time < 18) {
    sleep--
    sleepTimerPlaceholder.textContent = `sleepiness: ${sleep}`;
  }
}

function handlePlayTime () {
  if (play > 0 && play < 10 && time < 18) {
    play--
    playTimerPlaceholder.textContent = `boredom: ${play}`;
  }
}

function startTimer() {
    setInterval(function () {
      if (time < 18) {
        time++;
        timerPlaceholder.textContent = `age: ${time}`;
      } else if (time >= 18) {
        ripPet();
      }
    }, 1000);
  }

  function startHungryTimer() {
    setInterval(function () {
      if (hungry < 10 && time < 18) {
        hungry++;
        hungryTimerPlaceholder.textContent = `hunger: ${hungry}`;
      } else {
        ripPet();
      }
    }, 2000);
  }

  function startSleepTimer() {
    setInterval(function () {
      if (sleep < 10 && time < 18) {
        sleep++;
        sleepTimerPlaceholder.textContent = `sleepiness: ${sleep}`;
      } else {
        ripPet();
      }
    }, 3000);
  }

  function startPlayTimer() {
    setInterval(function () {
      if (play < 10 && time < 18) {
        play++;
        playTimerPlaceholder.textContent = `boredom: ${play}`;
      } else {
        clearInterval(startPlayTimer);
      }
    }, 3500);
  }

  // exit game
  function ripPet() {
    console.log('you lost!')
    startGameButton.hidden = false;

    }


hungryButton.addEventListener("click", handleHungry);
lightsOutButton.addEventListener("click", handleLightsOut);
playTimeButton.addEventListener("click", handlePlayTime);
startGameButton.addEventListener("click", handleStartGame);




