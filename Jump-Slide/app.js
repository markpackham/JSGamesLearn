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

  function jump() {
    bottom += 30;
    prince.style.bottom = bottom + "px";
  }

  function slideLeft() {}

  function slideRight() {}

  // keyboard functions
  function control(e) {
    if (e.keyCode === 39) {
      // if we press the right arrow on our keyboard
      slideRight();
      // if we press the up arrow
    } else if (e.keyCode === 38 || e.keyCode === 32) {
      jump();
      // if we press left
    } else if (e.keyCode === 37) {
      slideLeft();
    }
  }
  document.addEventListener("keyup", control);
});
