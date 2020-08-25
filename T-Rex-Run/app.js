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
        console.log("pressed");
        jump();
      }
    }
  }

  function jump() {}
});
