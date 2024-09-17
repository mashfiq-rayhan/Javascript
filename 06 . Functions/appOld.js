const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;

let gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid Choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const startGame = () => {
  
  if(gameIsRunning){
    return;
  }

  gameIsRunning = true;
  console.log("Game is Starting...");
  const playerSelection = getPlayerChoice();
  console.log(playerSelection);
};

startGameBtn.addEventListener("click", startGame);

// function startGame() {
//   console.log("Game is starting...");
// }

// const startGame = () => {
//     console.log("Game is Starting...");
// }

// const person = {
//   name: "Rev",
//   greet: function greet() {
//     console.log("Hello There!");
//   },
// };

// person.greet();

// console.log(typeof startGame);

// console.dir(startGame);
