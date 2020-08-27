document.addEventListener("DOMContentLoaded", () => {
  // character called prince since the idea is inspired by the old Prince of Persia game
  const prince = document.querySelector(".character");
  let isJumping = false;
  let isGoingRight = false;
  let isGoingLeft = false;
  let bottom = 0;
  let gravity = 0.9;
  // we don't need a "right" variable since it's just "left" inverted
  let left = 0;
  let leftTimerId;
  let rightTimerId;

  function jump() {
    // we use isJumping to prevent the risk of the character doing multiple jumps in midair
    if (isJumping) return;
    prince.classList.add("character");
    prince.classList.remove("character-sliding");
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

  function slideLeft() {
    prince.classList.add("character-sliding");
    prince.classList.remove("character");
    if (isGoingRight) {
      clearInterval(rightTimerId);
      isGoingRight = false;
    }
    isGoingLeft = true;
    leftTimerId = setInterval(function () {
      if (left > 0) {
        left -= 5;
        prince.style.left = left + "px";
      }
    }, 20);
  }

  function slideRight() {
    prince.classList.add("character-sliding");
    prince.classList.remove("character");
    if (isGoingLeft) {
      clearInterval(leftTimerId);
      isGoingLeft = false;
    }
    isGoingRight = true;
    rightTimerId = setInterval(function () {
      // still use "left" variable but instead of - we use +
      if (left < 500) {
        left += 5;
        prince.style.left = left + "px";
      }
    }, 20);
  }

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
