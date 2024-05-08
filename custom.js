let computerNumber = 0;
let playButton = document.getElementById("play-button");
let resetButton = document.querySelector(".reset-button");
let userInput = document.querySelector("#user-input");
let resultImg = document.querySelector(".main-img");
let resultText = document.querySelector(".result-text");
let chance = document.getElementById("chance");
let gameOver = false;
let chances = 5;
let userValueList = [];

chance.innerHTML = `남은 기회:${chances}`;
playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", focusInput);

function pickRandomNumber() {
  computerNumber = Math.floor(Math.random() * 100) + 1;
  console.log("빙고", computerNumber);
}

function play() {
  const userValue = userInput.value;
  if (userValue < 1 || userValue > 100) {
    resultText.textContent = "1부터 100 사이의 숫자 입력해주세요";

    return;
  }

  if (userValueList.includes(userValue)) {
    resultText.textContent = "이미 입력한 숫자에요. 다른 숫자를 입력해주세요";

    return;
  }

  chances--;
  chance.innerHTML = `남은 기회:${chances}`;
  userValueList.push(userValue);
  if (userValue < computerNumber) {
    resultImg.src =
      "https://i.pinimg.com/originals/6c/aa/74/6caa74789830fd42a763508ded838795.gif";
    resultText.textContent = "Up!";
  } else if (userValue > computerNumber) {
    resultImg.src =
      "https://i.pinimg.com/originals/e1/86/8c/e1868c6c9ff0ef0fdd3d9e10f90e9aea.gif";
    resultText.textContent = "Down!";
  } else {
    resultImg.src =
      "https://i.pinimg.com/originals/17/e5/e2/17e5e234abaaea615b72cb5d2a03311d.gif";
    resultText.textContent = "Bingo!";
    gameOver = true;
  }

  if (chances == 0) {
    gameOver = true;
  }

  if (gameOver == true) {
    playButton.disabled = true;
  }
}

function focusInput() {
  userInput.value = "";
}

function reset() {
  //리셋
  pickRandomNumber();
  userInput.value = "";
  resultImg.src =
    "https://i.pinimg.com/originals/7a/d9/8e/7ad98ee684c963ea7f375a1b625fece0.gif";
  resultText.textContent = "Bingo / Up / Down";
  gameOver = false;
  playButton.disabled = false;
  chances = 5;
  chance.innerHTML = `남은 기회:${chances}`;
  userValueList = [];
}

pickRandomNumber();
