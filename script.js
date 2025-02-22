let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComChoice = () => {
  options = ["rock", "paper", "scissor"];
  randomIdx = Math.floor(Math.random() * options.length);
  return options[randomIdx];
};

const drawGame = () => {
  console.log("Game was a draw");
  msg.innerHTML = "Game was a draw 🤔, Play again !";
  msg.style.backgroundColor = "pink";
};

const showWinner = (userWin , userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerHTML = userScore;
        console.log("You wins");
        msg.innerHTML = `You win 🥳 Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "yellow";
    }else{
        compScore++;
        compScorePara.innerHTML = compScore;
        console.log("You lose");
        msg.innerHTML = `You lose 😟 ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
  console.log("user choice", userChoice);
  const compChoice = genComChoice();
  console.log("comp choice", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") { //compChoice = "paper or scissor"
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") { //compChoice = "scissor or rock"
      userWin = compChoice === "scissor" ? false : true;
    } else { //compChoice = "scissor"
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});