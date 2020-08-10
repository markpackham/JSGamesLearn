let userChosen;
let computerChosen;
const displayResult = document.getElementById("result");
const userChoice = document.getElementById("user-choice");
const possibleChoices = document.querySelectorAll(".choices");
const computerChoice = document.getElementById("computer-choice");
const randomNumber = Math.round(Math.random() * 3);
// For scope reasons we end up having to use var
var result = results();

// get userChosen
possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChosen = e.target.id;
    generatedComputerChoice();
    results();
    userChoice.innerHTML = userChosen;
    computerChoice.innerHTML = computerChosen;
    displayResult.innerHTML = result;
  })
);

// get a random computer choice
function generatedComputerChoice() {
  if (randomNumber === 1) {
    return (computerChosen = "rock");
  } else if (randomNumber === 2) {
    return (computerChosen = "paper");
  } else randomNumber === 3;
  return (computerChosen = "scissors");
}

// get results
function results() {
  if (computerChosen == userChosen) {
    return (result = "game tied");
  } else if (computerChosen === "rock" && userChosen === "paper") {
    return (result = "you won");
  } else if (computerChosen === "rock" && userChosen === "scissors") {
    return (result = "you lost");
  } else if (computerChosen === "paper" && userChosen === "rock") {
    return (result = "you lost");
  } else if (computerChosen === "paper" && userChosen === "scissors") {
    return (result = "you won");
  } else if (computerChosen === "scissors" && userChosen === "rock") {
    return (result = "you won");
  } else computerChosen === "scissors" && userChosen === "paper";
  return (result = "you lost");
}
