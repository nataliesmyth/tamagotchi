console.log('sanity check')

// ---------- VARIABLES ---------- //
let startGameButton = document.getElementById('startGame');
let timerPlaceholder = document.getElementById("timer");
let egg = document.getElementById('egg')
let bird = document.getElementById('bird')
bird.hidden = true;

// Start values
let age = 0;
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
    this.hunger = hunger;
    this.sleepiness = sleepiness;
    this.boredom = boredom;
    this.age = age; 
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
const tama1 = new Tamagotchi(name, hungry, sleep, play, age);
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
  ageTimer();
  hungerTimer();
  sleepTimer();
  playTimer();
  

}

//  handle FNS tell ager what to do when button is clicked
function handleHungry () {
  // 
  if (hungry > 0 && hungry < 10 && age < 10) {
    hungry--;
    hungryTimerPlaceholder.textContent = `hunger: ${hungry}`;
  }
}

function handleLightsOut () {
  if (sleep > 0 && sleep < 8 && age < 10) {
    sleep--
    sleepTimerPlaceholder.textContent = `sleepiness: ${sleep}`;
  }
}

function handlePlayTime () {
  if (play > 0 && play < 10 && age < 10) {
    play--
    playTimerPlaceholder.textContent = `boredom: ${play}`;
  }
}

function ageTimer() {
    setInterval(function () {
      if (age < 10) {
        age++;
        timerPlaceholder.textContent = `age: ${age}`;
      } else if (age >= 10) {
        ripPet();
      }
    }, 1000);
  }

  function hungerTimer() {
    setInterval(function () {
      if (hungry < 10 && age < 10) {
        hungry++;
        hungryTimerPlaceholder.textContent = `hunger: ${hungry}`;
      } else {
        ripPet();
      }
    }, 2000);
  }

  function sleepTimer() {
    setInterval(function () {
      if (sleep < 10 && age < 10) {
        sleep++;
        sleepTimerPlaceholder.textContent = `sleepiness: ${sleep}`;
      } else {
        ripPet();
      }
    }, 3000);
  }

  function playTimer() {
    setInterval(function () {
      if (play < 10 && age < 10) {
        play++;
        playTimerPlaceholder.textContent = `boredom: ${play}`;
      } else {
        ripPet();
      }
    }, 3500);
  }

  // exit game
  function ripPet() {
    clearIntervals();
    console.log('you lost!')
  }

  // clear interval
  function clearIntervals() {
    clearInterval(ageTimer)
    clearInterval(hungerTimer);
    clearInterval(playTimer);
    clearInterval(sleepTimer)
  }


hungryButton.addEventListener("click", handleHungry);
lightsOutButton.addEventListener("click", handleLightsOut);
playTimeButton.addEventListener("click", handlePlayTime);
startGameButton.addEventListener("click", handleStartGame);




