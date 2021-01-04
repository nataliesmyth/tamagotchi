let startGameButton = document.getElementById('startGame');
let hungryButton = document.getElementById('hungry');
let lightsOutButton = document.getElementById('sleep');
let playTimeButton = document.getElementById('play');
let time = 0;
let hungry = 0;
let sleep = 0;
let play = 0;
let timerPlaceholder = document.getElementById("timer");
let hungryTimerPlaceholder = document.getElementById("hungryTimer");
let playTimerPlaceholder = document.getElementById("playTimer");
let sleepTimerPlaceholder = document.getElementById("sleepTimer");

// console.log(hungryTimerPlaceholder);
// console.log(sleepTimerPlaceholder);
// console.log(playTimerPlaceholder);


function handleStartGame () {
  // user input is saved in name variable
  let name = prompt("What is your name?");
  let namePlaceHolder = document.getElementById('name');
  namePlaceHolder.textContent = name;
  startTimer();
  startHungryTimer();
  startSleepTimer();
  startPlayTimer();
  // console.log(namePlaceHolder);
}

//  handle FNS tell timer what to do when button is clicked
function handleHungry () {
  // 
  if (hungry > 0 && hungry < 10) {
    hungry--;
    hungryTimerPlaceholder.textContent = `hungry: ${hungry}`;
  }
}

function handleLightsOut () {
  if (sleep > 0 && sleep < 10) {
    sleep--
    sleepTimerPlaceholder.textContent = `sleep: ${sleep}`;
  }
}

function handlePlayTime () {
  if (play > 0 && play < 10) {
    play--
    playTimerPlaceholder.textContent = `play: ${play}`;
  }
}

function startTimer() {
    setInterval(function () {
      if (time < 10) {
        time++;
        timerPlaceholder.textContent = `age: ${time}`;
      } else if (time == 10) {
        ripPet();
      }
    }, 1000);
  }

  function startHungryTimer() {
    setInterval(function () {
      if (hungry < 10) {
        hungry++;
        hungryTimerPlaceholder.textContent = `hungry: ${hungry}`;
      } else {
        ripPet();
      }
    }, 2000);
  }

  function startSleepTimer() {
    setInterval(function () {
      if (sleep < 10) {
        sleep++;
        sleepTimerPlaceholder.textContent = `sleep: ${sleep}`;
      } else {
        ripPet();
      }
    }, 6000);
  }

  function startPlayTimer() {
    setInterval(function () {
      if (play < 10) {
        play++;
        playTimerPlaceholder.textContent = `play: ${play}`;
      } else {
        ripPet();
      }
    }, 6500);
  }

  // exit game
  function ripPet() {
    // console.log(time);
    // console.log(hungry);
    // console.log(sleep);
    // console.log(play);

    if (time === 10 || hungry === 10 || sleep === 10 || play === 10) {
      clearInterval(startTimer);
      clearInterval(startPlayTimer);
      clearInterval(startHungryTimer);
      clearInterval(startSleepTimer);
    }
  }

hungryButton.addEventListener("click", handleHungry);
lightsOutButton.addEventListener("click", handleLightsOut);
playTimeButton.addEventListener("click", handlePlayTime);
startGameButton.addEventListener("click", handleStartGame);



//           "Eat" button pressed
//              if "hunger" is = true, then
//                 decrement "bone" count
//                 reset timer to 10
//          on "play" button pressed
//             if "sleepiness" is = true, then
//                 decrement "bed" count
//                 reset timer to 10
//         on "NAP" button pressed
//             if "Nap" = true then
//             decrement "bed" count
//             reset timer to 10


// //JS Class
// class Tamagaohi {
//     constructor(name) {
//         this.name = name;
//     }

//         // this.hunger = 0;
//         // this.age = 0;
//         // this.sleepiness = 0;
//         // this.boredom = 0;    
// }





  // 3 buttons: A, B, C
  //    A: feedPet
  //    B: playPet
  //    C: goToSleep

  // User creates pet name, CLICKS submit
  // egg appears
  // hatching lasts: 15 seconds, during which cracks appear and egg wobbles
  // at 15 seconds, egg cracks, TAMAGATCHI appears timer starts

  //BUTTONS
  // feedMe
  // 

//   /------- Timer ------- //
// // Select Button
// // Save Button in Variable
// // Add click event listener to button
// //--------App State
// let time = 3;
// //---------- Cached DOM Elements
// let startButton = document.getElementById("startGame");
// //------------Event Listeners
// startButton.addEventListener("click", handleStartGame);
// //----------- Function Declarations
// function handleStartGame() {
//   console.log("Start Game clicked...!");
//   // Start Timer
//   startTimer(3);
// }
// // "Begin" Timer
// function startTimer() {
//   const Timer = setInterval(function () {
//     if (time > 0) {
//       time--;
//       console.log(time);
//     } else {
//       console.log("Time is up");
//       clearInterval(Timer);
//     }
//   }, 1000);
// }
// //------- Timer ------- //
// // Select Button
// // Save Button in Variable
// // Add click event listener to button
// //--------App State
// let time = 3;
// //Cached DOM Elements
// const startButton = document.getElementById("startGame");
// //------------Event Listeners
// startButton.addEventListener("click", handleStartGame);
// //----------- Function Declarations
// function handleStartGame() {
//   console.log("Start Game clicked...!");
//   // Start Timer
//   startTimer(3);
// }
// // "Begin" Timer
// function startTimer() {
//   const Timer = setInterval(function () {
//     if (time > 0) {
//       time--;
//       console.log(time);
//     } else {
//       console.log("Time is up");
//       clearInterval(Timer);
//     }
//   }, 1000);
// }





