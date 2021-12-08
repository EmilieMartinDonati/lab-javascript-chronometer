


const Chronometer = require("./chronometer");

const chronometer = new Chronometer();
const chronometer1 = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

listElements = document.CreateElement("li");

let intervaldId = null;

function printTime() {
intervalId = setInterval(() => {
  printMinutes();
  printSeconds();
}, 100)
  
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.textContent = minutes[0];
  minUniElement.textContent = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.textContent = seconds[0];
  secUniElement.textContent = seconds[1];

}
// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  listElements.textContent = `${chronometer.computeTwoDigitNumber(chronometer.getMinutes())}:${chronometer.computeTwoDigitNumber(chronometer.getSeconds())}`;
  splitsElement.appendChild(listElements);
}

function clearSplits() {
  chronometer.reset();
  splitsElement.removeChild(listElements);
}

function setStopBtn() {
  chronometer.start();
  btnLeftElement.classList.remove("start")
  btnLeftElement.classList.add("stop")
  btnLeftElement.textContent = "STOP";
}

function setSplitBtn() {
  btnRightElement.classList.remove("reset");
  btnRightElement.classList.add("split");
}

function setStartBtn() {
  chronometer.stop();
  btnLeftElement.classList.remove("stop");
  btnLeftElement.classList.add("start");
  btnLeftElement.textContent = "START";
}

function setResetBtn() {
  btnRightElement.classList.remove("split");
  btnRightElement.classList.add("reset");
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
   if (btnLeftElement.classList.contains("stop")) {
     setStartBtn();
     setResetBtn();
   }
   else if (btnLeftElement.classList.contains("start")) {
     setStopBtn();
     setSplitBtn();
   }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains("split")) {
  printSplit();
  }
  if (btnRightElement.classList.contains("reset")) {
  clearSplits();
  }
});



