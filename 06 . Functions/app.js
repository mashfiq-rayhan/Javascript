const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = "ROCK";

const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! we chose ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => {
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK)
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
};

const startGame = () => {
  if (gameIsRunning) {
    return;
  }

  gameIsRunning = true;

  console.log("Game is starting...");

  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();

  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
  }

  let message = `You picked ${playerChoice ? playerChoice : DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, Therefore you `;

  if (winner === RESULT_DRAW) {
    message = message + "had a draw.";
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + "won.";
  } else {
    message = message + "lost.";
  }

  alert(message);
  gameIsRunning = false;
};

startGameBtn.addEventListener("click", startGame);

// not related to game
const sumUp = (resHand, ...numbers) => {
    const validateNumber =  (number) => {
        return isNaN(number) ? 0 : number    
    };

    let sum = 0;
    for(const num of numbers) {
        sum += validateNumber(num);
    }
    resHand(sum);
};

const subtractUp = (resHand, ...numbers) => {
    let sum = 0;
    for(const num of numbers) {
        sum -= num;
    }
    resHand(sum);
}

const showRes = (msgTxt, res) => {
    alert(msgTxt + " " + res);
}

sumUp(showRes.bind(this, "The Result after adding  the numbers is: "),1,2,3,4,5,6,7,8,9);
subtractUp(showRes.bind(this, "The Result after subtracting  the numbers is: "),1,2,3,4,5,6,7,8,9);