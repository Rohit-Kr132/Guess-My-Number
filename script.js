'use strict';

const generateNumber = () => Math.trunc(Math.random() * 20 + 1);
let secretNumber = generateNumber();
let score = document.querySelector('.score').textContent;
let highscore = 0;
let gamewon = false;
// document.querySelector('.number').textContent = secretNumber;

const decreaseScore = function () {
  score--;
  document.querySelector('.score').textContent = score;
};

const clearInputField = function () {
  document.querySelector('.guess').value = '';
};

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
    gamewon = true;
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
  }

  if (score === 0) {
    document.querySelector('.message').textContent = '🚫 Game Over!';
  }
});

//Programming the reset button(again button)
document.querySelector('.again').addEventListener('click', function () {
  if (gamewon) {
    highscore += score;
    score = 11;
    gamewon = false;
    decreaseScore();
    clearInputField();

    document.querySelector('.number').textContent = '?';

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';
  } else {
    score = 11;
    highscore = 0;
    decreaseScore();
    clearInputField();
  }
  secretNumber = generateNumber();
  document.querySelector('.highscore').textContent = highscore;
});
