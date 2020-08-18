document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".grid div");
  const scoreDisplay = document.querySelector("span");
  const startBtn = document.querySelector(".start");

  const width = 10;
  let currentIndex = 0;
  let appleIndex = 0;
  let currentSnake = [2, 1, 0];
  let direction = 1;
  let score = 0;
  let speed = 0.9;
  let intervalTime = 0;
  let interval = 0;

  // start and restart game

  // keycode funcitons for movement
  function control(e) {
    squares[currentIndex].classList.remove("snake");
    // 39 is the right arrow key
    if (e.keyCode === 39) {
      direction = 1;
      // up arrow
    } else if (e.keyCode === 38) {
      direction = -width;
      // left arrow
    } else if (e.keyCode === 37) {
      direction = -1;
      // down arrow
    } else if (e.keyCode === 40) {
      direction = +width;
    }
  }

  document.addEventListener("keyup", control);
  startBtn.addEventListener("click", startGame);
});
