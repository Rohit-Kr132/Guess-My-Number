'use strict';

const generateNumber = () => Math.trunc(Math.random() * 20 + 1);

const decreaseScore = function () {
  score--;
  document.querySelector('.score').textContent = score;
};

const clearInputField = function () {
  document.querySelector('.guess').value = '';
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let secretNumber = generateNumber();
let score = document.querySelector('.score').textContent;
let highscore = 0;

//Actual Game logic
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No Number!');
  } else if (guess != secretNumber) {
    displayMessage(guess < secretNumber ? '📉 Too Low!' : '📈 Too High!');
    decreaseScore();
    clearInputField();
  } else {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (highscore < score) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;
  }

  if (score === 0) {
    displayMessage('🚫 Game Over!');
  }
});

//Programming the reset(again button)
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  score = 11;
  decreaseScore();
  clearInputField();
  secretNumber = generateNumber();
});
