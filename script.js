'use strict';
//인풋에 숫자를 입력하고
// 인풋에 숫자를 누르지 않을 수도 있기 때문에!!
//check를 누르면 ? 란에 랜덤 숫자가 1~20 나온다Score를 하나씩 낮춰준다

// 사용자가 입력한 숫자와 랜덤숫자가 같으면 success 메시지 Score가 high score보다 높으면 같게 한다 High score 보다 낮으면  바꾸지 않는다 배경화면 컬러가 바뀐다

// 사용자가 입력한 숫자와 랜덤숫자가  다르면 fail 메시지

const againBtn = document.querySelector('.again');

const checkBtn = document.querySelector('.check');

const body = document.querySelector('body');

const randomNum = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

checkBtn.addEventListener('click', function () {
  const inputValue = Number(document.querySelector('.guess').value);
  console.log(inputValue);
  if (!inputValue) {
    displayMessage('✋🏻Choose Number');
  } else if (inputValue === randomNum) {
    document.querySelector('.number').textContent = randomNum;
    displayMessage('Correct Number👍🏻');
    body.style.background = '#60b347';
    score--;
    document.querySelector('.score').textContent = score;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    } else document.querySelector('.highscore').textContent = highscore;
  } else if (inputValue !== randomNum) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      displayMessage(inputValue > randomNum ? 'Lower' : 'Upper');
    } else {
      displayMessage('You lost the game');
    }
  }
});

againBtn.addEventListener('click', function () {
  //   document.querySelector('.guess').value = '';
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('start guessing');
  //random number
  document.querySelector('.number').textContent = '?';
  const randomNum = Math.trunc(Math.random() * 20) + 1;
  //input reset
  document.querySelector('.guess').value = '';
  //bg reset
  body.style.background = '#222';
});
