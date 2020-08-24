document.addEventListener("DOMContentLoaded", () => {
  const bird = document.querySelector(".bird");
  const gameDisplay = document.querySelector(".game-container");
  const ground = document.querySelector(".ground-moving");

  let birdLeft = 220;
  let birdBottom = 100;
  let gravity = 2;
  let isGameOver = false;
  let gap = 430;

  function startGame() {
    birdBottom -= gravity;
    bird.style.bottom = birdBottom + "px";
    bird.style.left = birdLeft + "px";
  }

  let timerId = setInterval(startGame, 20);

  function control() {}

  function jump() {
    // make sure bird can't jump out of screen
    if (birdBottom < 500) birdBottom += 50;
    bird.style.bottom = birdBottom + "px";
  }
  document.addEventListener("keyup", jump);
});
