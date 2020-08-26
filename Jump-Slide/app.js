document.addEventListener("DOMContentLoaded", () => {
  // character called prince since the idea is inspired by the old Prince of Persia game
  const prince = document.querySelector(".character");
  let isJumping = false;
  let isGoingRight = false;
  let isGoingLeft = false;
  let bottom = 0;
  let gravity = 0.9;
  let left = 0;
  let leftTimerId;
  let rightTimerId;

  function jump() {}

  function slideLeft() {}

  function slideRight() {}

  // keyboard functions
  function control(e) {
    if (e.keyCode === 39) {
      // if we press the right arrow on our keyboard
      slideRight();
    } else if (e.keyCode === 38) {
      // if we press the up arrow
      jump();
    } else if (e.keyCode === 37) {
      // if we press left
      slideLeft();
    }
  }
  document.addEventListener("keyup", control);
});
