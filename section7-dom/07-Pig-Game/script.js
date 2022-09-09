'use strict';

// Selecting score elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

// Selecting format elements
const p0 = document.getElementById('name--0');
const p1 = document.getElementById('name--1');
const winner0 = document.getElementById('winner--0');
const winner1 = document.getElementById('winner--1');
console.log(p0, p1);
const currents = document.querySelectorAll('.current');
const currentScores = document.querySelectorAll('.current-score');

// Selecting button elements
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
let currentPlayer = 0;
setUp();
function setUp() {
  document.querySelector(`.player--0`).classList.add('player--active');
  currentPlayer = 1 - currentPlayer;
  document.querySelector(`.player--1`).classList.remove('player--active');
  score0El.textContent = 0;
  score1El.textContent = 0;
  btnRoll.disabled = false;
  btnHold.disabled = false;
  diceEl.classList.add('hidden');
  winner0.classList.add('hidden');
  winner1.classList.add('hidden');
  currentScores.forEach(currentScore => {
    currentScore.textContent = 0;
  });
  currentPlayer = 0;
}

function reset() {
  diceEl.classList.toggle('hidden');
  btnHold.classList.toggle('hidden');
  btnRoll.classList.toggle('hidden');
  currents.forEach(current => {
    current.classList.toggle('hidden');
  });
  document
    .getElementById(`name--${currentPlayer}`)
    .classList.toggle('endPosTitles');
  document
    .getElementById(`name--${1 - currentPlayer}`)
    .classList.toggle('endPosTitles');
  document
    .getElementById(`score--${currentPlayer}`)
    .classList.toggle('endPosWin');
  document
    .getElementById(`score--${1 - currentPlayer}`)
    .classList.toggle('endPosLoss');
  document
    .getElementById(`name--${1 - currentPlayer}`)
    .classList.toggle('losingShift');

  document
    .getElementById(`winner--${currentPlayer}`)
    .classList.toggle('hidden');
}

// Clicking on the roll button
btnRoll.addEventListener('click', function () {
  let randomNo = Math.ceil(Math.random() * 6);
  diceEl.src = `media/dice-${randomNo}.png`;
  diceEl.classList.remove('hidden');
  if (randomNo === 1) {
    document.getElementById(`current--${currentPlayer}`).textContent = 0;
    switchPlayer();
  } else {
    document.getElementById(`current--${currentPlayer}`).textContent =
      Number(document.getElementById(`current--${currentPlayer}`).textContent) +
      randomNo;
  }
});

function switchPlayer() {
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.toggle('player--active');
  currentPlayer = 1 - currentPlayer;
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.toggle('player--active');
}

function winnerWinner() {
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.add('player--winner');
  diceEl.classList.toggle('hidden');
  btnHold.classList.toggle('hidden');
  btnRoll.classList.toggle('hidden');
  currents.forEach(current => {
    current.classList.toggle('hidden');
  });
  document
    .getElementById(`name--${currentPlayer}`)
    .classList.toggle('endPosTitles');
  document
    .getElementById(`name--${1 - currentPlayer}`)
    .classList.toggle('endPosTitles');
  document
    .getElementById(`score--${currentPlayer}`)
    .classList.toggle('endPosWin');
  document
    .getElementById(`score--${1 - currentPlayer}`)
    .classList.toggle('endPosLoss');
  document
    .getElementById(`name--${1 - currentPlayer}`)
    .classList.toggle('losingShift');

  document
    .getElementById(`winner--${currentPlayer}`)
    .classList.toggle('hidden');
}

// Clicking on the hold button
btnHold.addEventListener('click', function () {
  document.getElementById(`score--${currentPlayer}`).textContent =
    Number(document.getElementById(`score--${currentPlayer}`).textContent) +
    Number(document.getElementById(`current--${currentPlayer}`).textContent);
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  if (document.getElementById(`score--${currentPlayer}`).textContent >= 100) {
    console.log('Winner');
    winnerWinner();
  } else {
    switchPlayer();
  }
});

// Clicking on the new game button
btnNew.addEventListener('click', function () {
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.remove('player--winner');
  if (
    document
      .getElementById(`name--${1 - currentPlayer}`)
      .classList.contains('losingShift') ||
    document
      .getElementById(`name--${currentPlayer}`)
      .classList.contains('losingShift')
  ) {
    reset();
  }
  currentPlayer = 0;
  setUp();
});
