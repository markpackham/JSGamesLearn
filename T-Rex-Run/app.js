document.addEventListener("DOMContentLoaded", () => {
  const dino = document.querySelector(".dino");
  const grid = document.querySelector(".grid");
  const body = document.querySelector("body");
  const alert = document.getElementById("alert");
  let isJumping = false;
  let gravity = 0.9;
  let isGameOver = false;
  let position = 0;

  function control(e) {
    // just like flappy bird, spacebar is used for jumping
    // keycodes can be found here http://keycode.info/
    if (e.keyCode === 32) {
      if (!isJumping) {
        isJumping = true;
        jump();
      }
    }
  }
  document.addEventListener("keyup", control);

  function jump() {
    let timerId = setInterval(function () {
      // we need to clear the interval or the dino will be stuck in the jumped position

      // move down (gravity)
      if (position === 150) {
        clearInterval(timerId);
        let downTimeId = setInterval(function () {
          if (position === 0) {
            clearInterval(downTimeId);
            isJumping = false;
          }
          position -= 30;
          dino.style.bottom = position + "px";
        }, 20);
      }

      // move upwards
      position += 30;
      dino.style.bottom = position + "px";
    }, 20);
  }
});
