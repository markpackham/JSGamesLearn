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
    // we use isJumping to prevent the risk of the character doing multiple jumps in midair
    if (isJumping) return;
    let timerUpId = setInterval(function () {
      if (bottom > 250) {
        clearInterval(timerUpId);
        let timerDownId = setInterval(function () {
          if (bottom < 0) {
            clearInterval(timerDownId);
            isJumping = false;
          }
          bottom -= 5;
          bottom = bottom * gravity;
          prince.style.bottom = bottom + "px";
        }, 20);
      }
      isJumping = true;
      bottom += 30;
      bottom = bottom * gravity;
      prince.style.bottom = bottom + "px";
    }, 20);
  }

  function slideLeft() {}

  function slideRight() {}

  // keyboard functions
  function control(e) {
    if (e.keyCode === 39) {
      // if we press the right arrow on our keyboard
      slideRight();
      // if we press the up arrow or spacebar
    } else if (e.keyCode === 38 || e.keyCode === 32) {
      jump();
      // if we press left
    } else if (e.keyCode === 37) {
      slideLeft();
    }
  }
  document.addEventListener("keyup", control);
});
