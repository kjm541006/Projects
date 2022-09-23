const userScoreSpan = document.getElementById("user-score");
const compScoreSpan = document.getElementById("comp-score");
const userSelect = document.getElementById("user-select");
const compSelect = document.getElementById("comp-select");
const rock = document.getElementById("r");
const scissor = document.getElementById("s");
const paper = document.getElementById("p");
const resultMessage = document.querySelector("#message");
const modalBtn = document.getElementById("record-btn");
const modal = document.querySelector(".modal");
const modalBackground = document.querySelector(".modal-background");
const closeModalBtn = document.querySelector(".modal-close");

let userScore = 0;
let compScore = 0;
let state = "";
let times = 1;
let record = [];

const changeKor = (word) => {
  switch (word) {
    case "r":
      word = "바위";
      break;
    case "s":
      word = "가위";
      break;
    case "p":
      word = "보";
      break;
  }
  return word;
};

const compChoice = () => {
  const casesArr = ["r", "s", "p"];
  const randomChoice = casesArr[Math.floor(Math.random() * 3)];
  // console.log(`치트키 컴퓨터선택은 ${randomChoice}`);
  return randomChoice;
};

const modalControl = () => {
  modal.classList.toggle("hidden");
  record.forEach((x) => console.log(x));
};

const userWin = (com, user) => {
  state === "win" ? times++ : (times = 1);
  com = changeKor(com);
  user = changeKor(user);
  record.push(user);
  userScore++;
  userScoreSpan.innerHTML = userScore;
  compScoreSpan.innerHTML = compScore;
  userSelect.innerHTML = user;
  compSelect.innerHTML = com;
  resultMessage.innerHTML = `승리 ${times !== 1 ? "x" + times : ""}`;
  state = "win";
};

const userLose = (com, user) => {
  state === "lose" ? times++ : (times = 1);
  com = changeKor(com);
  user = changeKor(user);
  record.push(user);
  compScore++;
  userScoreSpan.innerHTML = userScore;
  compScoreSpan.innerHTML = compScore;
  userSelect.innerHTML = user;
  compSelect.innerHTML = com;
  resultMessage.innerHTML = `패배 ${times !== 1 ? "x" + times : ""}`;
  state = "lose";
};

const draw = (com, user) => {
  state === "draw" ? times++ : (times = 1);
  com = changeKor(com);
  user = changeKor(user);
  record.push(user);
  userSelect.innerHTML = user;
  compSelect.innerHTML = com;
  resultMessage.innerHTML = `무승부 ${times !== 1 ? "x" + times : ""}`;
  state = "draw";
};

const game = (user) => {
  const com = compChoice();
  const userChoice = user;
  console.log(com, userChoice);
  switch (com + userChoice) {
    case "rs":
    case "sp":
    case "pr":
      console.log("user lose");
      userLose(com, userChoice);
      break;
    case "rp":
    case "sr":
    case "ps":
      console.log("user win");
      userWin(com, userChoice);
      break;
    default:
      console.log("draw");
      draw(com, userChoice);
      break;
  }
  console.log(record);
};

const app = () => {
  const rockClicked = () => game("r");
  const scissorClicked = () => game("s");
  const paperClicked = () => game("p");

  rock.addEventListener("click", rockClicked);
  scissor.addEventListener("click", scissorClicked);
  paper.addEventListener("click", paperClicked);
  modalBtn.addEventListener("click", modalControl);
  closeModalBtn.addEventListener("click", modalControl);
  modalBackground.addEventListener("click", modalControl);
};

app();
