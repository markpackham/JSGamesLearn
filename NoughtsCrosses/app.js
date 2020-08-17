document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".grid div");
  const playerDisplay = document.querySelector("#player");

  let currentPlayer = "playerX";

  squares.forEach((square) => {
    square.addEventListener("click", clickOutcome);
  });

  function clickOutcome(e) {
    const squresArray = Array.from(squares);
    const index = squresArray.indexOf(e.target);
    // console.log(index);
    playerDisplay.innerHTML = currentPlayer;

    if (currentPlayer === "playerX") {
      squares[index].classList.add("playerX");
      currentPlayer = "player0";
    } else {
      squares[index].classList.add("player0");
      currentPlayer = "playerX";
    }
  }
});
