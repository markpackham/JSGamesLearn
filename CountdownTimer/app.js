document.addEventListener("DOMContentLoaded", () => {
  const timeLeftDisplay = document.querySelector("#time-left");
  const startBtn = document.querySelector("#start-button");
  const resetBtn = document.querySelector("#reset-button");
  timeLeft = 10;

  function countDown() {
    setInterval(function () {
      if (timeLeft <= 0) {
        clearInterval((timeLeft = 0));
      }

      timeLeftDisplay.innerHTML = timeLeft;
      timeLeft -= 1;
    }, 1000);
  }

  function resetCounter() {
    timeLeft = 10;
  }

  startBtn.addEventListener("click", countDown);

  resetBtn.addEventListener("click", resetCounter);
});
