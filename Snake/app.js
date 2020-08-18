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
  function startGame() {
    // start by removing stuff
    currentSnake.forEach((index) => squares[index].classList.remove("snake"));
    squares[appleIndex].classList.remove("apple");
    clearInterval(interval);
    score = 0;
    randomApple();
    direction = 1;
    scoreDisplay.innerText = score;
    intervalTime = 1000;
    currentSnake = [2, 1, 0];
    currentIndex = 0;
    currentSnake.forEach((index) => squares[index].classList.add("snake"));
    interval = setInterval(moveOutcomes, intervalTime);
  }

  // movement outcomes
  function moveOutcomes() {
    // snake hitting border or hitting self
    if (
      // snake hits bottom
      (currentSnake[0] + width >= width * width && direction === width) ||
      // snake hits right wall
      (currentSnake[0] % width === width - 1 && direction === 1) ||
      // snake hits left wall
      (currentSnake[0] % width === 0 && direction === -1) ||
      // snake hits top wall
      (currentSnake[0] - width < 0 && direction === -width) ||
      // snake runs into itself
      squares[currentSnake[0] + direction].classList.contains("snake")
    ) {
      // clear interval if the above happen
      return clearInterval(interval);
    }

    const tail = currentSnake.pop(); //removes last ite of the array and shows it
    // removes class of snake from the TAIL
    squares[tail].classList.remove("snake");
    // gives direction to the head of the array,
    // unshift() method adds new items to the beginning of an array, and returns the new length
    currentSnake.unshift(currentSnake[0] + direction);

    // deals with snake getting apple
    if (squares[currentSnake[0]].classList.contains("apple")) {
      squares[currentSnake[0]].classList.remove("apple");
      squares[tail].classList.add("snake");
      currentSnake.push(tail);
      randomApple();
      score++;
      scoreDisplay.textContent = score;
      clearInterval(interval);
      intervalTime = intervalTime * speed;
      interval = setInterval(moveOutcomes, intervalTime);
    }
    squares[currentSnake[0]].classList.add("snake");
  }

  // generate new apple once apple is eaten
  function randomApple() {
    do {
      appleIndex = Math.floor(Math.random() * squares.length);
    } while (
      // prevent the apple from appearing ontop of the snake
      squares[appleIndex].classList.contains("snake")
    );
    squares[appleIndex].classList.add("apple");
  }

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
