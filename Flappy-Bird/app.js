document.addEventListener("DOMContentLoaded", () => {
  const bird = document.querySelector(".bird");
  const gameDisplay = document.querySelector(".game-container");
  const ground = document.querySelector(".ground-moving");

  let birdLeft = 220;
  let birdBottom = 100;
  let gravity = 2;
  let isGameOver = false;
  let gap = 470;
  let gameTimerId = setInterval(startGame, 20);

  function startGame() {
    birdBottom -= gravity;
    bird.style.bottom = birdBottom + "px";
    bird.style.left = birdLeft + "px";
  }

  let timerId = setInterval(startGame, 20);

  function control(e) {
    // spacebar
    if (e.keyCode === 32) {
      jump();
    }
  }
  function jump() {
    // make sure bird can't jump out of screen
    if (birdBottom < 500) birdBottom += 50;
    bird.style.bottom = birdBottom + "px";
  }

  // obstacles are the Super Mario style drain pipes
  function generateObstacle() {
    let obstacleLeft = 500;
    let randomHeight = Math.random() * 60;
    let obstacleBottom = randomHeight;
    const obstacle = document.createElement("div");
    const topObstacle = document.createElement("div");
    if (!isGameOver) {
      obstacle.classList.add("obstacle");
      topObstacle.classList.add("topObstacle");
    }
    gameDisplay.appendChild(obstacle);
    gameDisplay.appendChild(topObstacle);
    obstacle.style.left = obstacleLeft + "px";
    topObstacle.style.left = obstacleLeft + "px";
    obstacle.style.bottom = obstacleBottom + "px";
    topObstacle.style.bottom = obstacleBottom + gap + "px";

    function moveObstacle() {
      obstacleLeft -= 2;
      obstacle.style.left = obstacleLeft + "px";
      topObstacle.style.left = obstacleLeft + "px";

      // the obstacle's width is 60px, we make it disaper at the end of the screen
      if (obstacleLeft === -60) {
        clearInterval(timerId);
        gameDisplay.removeChild(obstacle);
        gameDisplay.removeChild(topObstacle);
      }
      // check if bird has crashed into obstacle
      if (
        (obstacleLeft > 200 &&
          obstacleLeft < 280 &&
          birdLeft === 220 &&
          (birdBottom < obstacleBottom + 153 ||
            birdBottom > obstacleBottom + gap - 200)) ||
        birdBottom === 0
      ) {
        gameOver();
        clearInterval(timerId);
      }
    }
    let timerId = setInterval(moveObstacle, 20);
    if (!isGameOver) setTimeout(generateObstacle, 4000);
  }
  generateObstacle();

  function gameOver() {
    clearInterval(gameTimerId);
    alert("Game Over!");
    isGameOver = true;
    document.removeEventListener("keyup", control);
    ground.classList.add("ground");
    ground.classList.remove("ground-moving");
  }

  document.addEventListener("keyup", control);
});
