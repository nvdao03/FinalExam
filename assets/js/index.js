let timer;
let isGameStarted = false;
let buttonText = "Bắt đầu";

const btnStart = document.getElementById("btn-start");
const timerDisplay = document.getElementById("timer");

function startTimer() {
  let seconds = 0;
  timer = setInterval(() => {
    seconds++;
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  timerDisplay.textContent = "00:00";
}

function randomizeNumbers() {
  const numberDivs = document.querySelectorAll(".grid-cols-4 > div");
  const numbers = Array.from({ length: 100 }, (_, i) => i + 1);

  numberDivs.forEach((div) => {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    const randomNumber = numbers[randomIndex];
    div.textContent = randomNumber;
    numbers.splice(randomIndex, 1);
  });
}

btnStart.addEventListener("click", () => {
  if (!isGameStarted) {
    // Bắt đầu game
    isGameStarted = true;
    buttonText = "Kết thúc";
    btnStart.textContent = buttonText;
    startTimer();
    randomizeNumbers();
  } else {
    // Kết thúc game
    isGameStarted = false;
    buttonText = "Bắt đầu";
    btnStart.textContent = buttonText;
    resetTimer();
    // Reset lại các số về ban đầu từ 1-12
    const numberDivs = document.querySelectorAll(".grid-cols-4 > div");
    numberDivs.forEach((div, index) => {
      div.textContent = index + 1;
    });
  }
});
