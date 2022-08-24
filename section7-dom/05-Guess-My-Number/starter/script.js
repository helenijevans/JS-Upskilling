'use strict';
// let number = '';
// while (!number) {
//   number = Math.round(Math.random() * 20);
// }
let score;
let secretNumber;
let highScore = 0;

setUp();

function setUp() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = '20';
  //console.log(secretNumber); //Gives the answer 0.0
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (score > 1) {
    if (!guess) {
      document.querySelector('.message').textContent =
        'To play, please enter a number between 1 and 20';
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = '🎉 Correct Number!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      console.log(score > highScore);
      if (score > highScore) {
        highScore = score;
      }
      document.querySelector('.highscore').textContent = String(highScore);
    } else {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.score').textContent = 0;
    document.querySelector('.message').textContent = '😭 You lost the game! ';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  setUp();
});
