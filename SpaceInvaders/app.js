document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".grid div");
  const resultDisplay = document.querySelector("#result");
  let width = 15;
  let currentShooterIndex = 202;
  let currentInvaderIndex = 0;
  let alienInvaderTakenDown = [];
  let result = 0;
  let direction = 1;
  let invaderId;

  // define the alient invaders
  const alienInvaders = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
  ];

  // draw the alien alien invaders
  alienInvaders.forEach((invader) =>
    squares[currentInvaderIndex + invader].classList.add("invader")
  );

  // draw the shooter
  squares[currentShooterIndex].classList.add("shooter");
});
