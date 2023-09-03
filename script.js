'use strict';

const generateNumber = () => Math.trunc(Math.random() * 20 + 1);

const decreaseScore = function () {
  score--;
  document.querySelector('.score').textContent = score;
};

const clearInputField = function () {
  document.querySelector('.guess').value = '';
};

let secretNumber = generateNumber();
let score = document.querySelector('.score').textContent;
let highscore = 0;

// document.querySelector('.number').textContent = secretNumber;

//Actual Game logic
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '📉 Too Low!';
    decreaseScore();
    clearInputField();
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '📈 Too High!';
    decreaseScore();
    clearInputField();
  } else {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (highscore < score) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;
  }

  if (score === 0) {
    document.querySelector('.message').textContent = '🚫 Game Over!';
  }
});

//Programming the reset(again button)
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  score = 11;
  decreaseScore();
  clearInputField();
  secretNumber = generateNumber();
});
