let startGameButton = document.getElementById('startGame');
let hungryButton = document.getElementById('hungry');
let lightsOutButton = document.getElementById('sleep');
let playTimeButton = document.getElementById('play');
let mainGame = document.getElementById('main-game');
let time = 0;
let hungry = 0;
let sleep = 0;
let play = 0;
let timerPlaceholder = document.getElementById("timer");
let hungryTimerPlaceholder = document.getElementById("hungryTimer");
let playTimerPlaceholder = document.getElementById("playTimer");
let sleepTimerPlaceholder = document.getElementById("sleepTimer");

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

const tama1 = new Tamagotchi(0, 0, 0, 0);
console.log(tama1);


function handleStartGame () {
  // user input is saved in name variable
  let name = prompt("What is your pet's name?");
  let namePlaceHolder = document.getElementById('name');
  namePlaceHolder.textContent = `name: ${name}`;
  startGameButton.remove()

  startTimer();
  startHungryTimer();
  startSleepTimer();
  startPlayTimer();
  

}

//  handle FNS tell timer what to do when button is clicked
function handleHungry () {
  // 
  if (hungry > 0 && hungry < 10 && time < 10) {
    hungry--;
    hungryTimerPlaceholder.textContent = `hunger: ${hungry}`;
  }
}

function handleLightsOut () {
  if (sleep > 0 && sleep < 10 && time < 10) {
    sleep--
    sleepTimerPlaceholder.textContent = `sleepiness: ${sleep}`;
  }
}

function handlePlayTime () {
  if (play > 0 && play < 10 && time < 10) {
    play--
    playTimerPlaceholder.textContent = `boredom: ${play}`;
  }
}

function startTimer() {
    setInterval(function () {
      if (time < 10) {
        time++;
        timerPlaceholder.textContent = `age: ${time}`;
      } else if (time >= 10) {
        ripPet();
      }
    }, 1000);
  }

  function startHungryTimer() {
    setInterval(function () {
      if (hungry < 10 && time < 10) {
        hungry++;
        hungryTimerPlaceholder.textContent = `hunger: ${hungry}`;
      } else {
        ripPet();
      }
    }, 2000);
  }

  function startSleepTimer() {
    setInterval(function () {
      if (sleep < 10 && time < 10) {
        sleep++;
        sleepTimerPlaceholder.textContent = `sleepiness: ${sleep}`;
      } else {
        ripPet();
      }
    }, 3000);
  }

  function startPlayTimer() {
    setInterval(function () {
      if (play < 10 && time < 10) {
        play++;
        playTimerPlaceholder.textContent = `boredom: ${play}`;
      } else {
        clearInterval(startPlayTimer);
      }
    }, 3500);
  }

  // exit game
  function ripPet() {
    // console.log('you lost!')
    startGameButton.hidden = false;

    // console.log(time);
    // console.log(hungry);
    // console.log(sleep);
    // console.log(play);

    // if (time === 10 || hungry === 10 || sleep === 10 || play === 10) {
      clearInterval(startTimer);
      clearInterval(startPlayTimer);
      clearInterval(startHungryTimer);
      clearInterval(startSleepTimer);
    }


hungryButton.addEventListener("click", handleHungry);
lightsOutButton.addEventListener("click", handleLightsOut);
playTimeButton.addEventListener("click", handlePlayTime);
startGameButton.addEventListener("click", handleStartGame);




