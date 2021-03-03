const board = document.querySelector(".board");
const counter = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let boxes = [];
const player1 = "O";
const player2 = "Y";

let isPlayer1Active = true;
const displayUserAction = () => {
  // when a player is active, he became inactive. so later it is the next turn
  isPlayer1Active = !isPlayer1Active;
  if (!isPlayer1Active) {
    return "O";
  } else {
    return "X";
  }
};

const handleBoxClick = (event) => {
  event.target.innerHTML = displayUserAction(); //naming the function so we can remove the event listener => needs to be reffered => event.taget to ping box // getting the value from the function
  defineWhoWin();
};

const drawBoard = () => {
  for (let i = 0; i < 9; i++) {
    let box = document.createElement("div");
    boxes.push(box);
    box.id = i;
    box.classList.add("box"); // a class for the box so we can use them to remove event list so the game stop
    box.addEventListener("click", handleBoxClick); // change click function for the handlebox
    board.appendChild(box);
    box.style.backgroundColor = "rgb(129, 198, 245)";
    box.style.border = "5px solid orange ";
    box.style.fontSize = "70";
    box.style.color = "rgb(243, 83, 9)";
    box.style.display = "flex";
    box.style.alignItems = "center";
    box.style.justifyContent = "center";
  }
};
drawBoard();

const calculateWinerPerline = (index1, index2, index3) => {
  //ifbox not empty and box1=box2 and box1 = box3
  let string1 = boxes[index1].innerHTML.trim();
  let string2 = boxes[index2].innerHTML.trim();
  let string3 = boxes[index3].innerHTML.trim();
  if (string1 !== "" && string2 !== "" && string3 != "") {
    if (
      boxes[index1].innerHTML === boxes[index2].innerHTML &&
      boxes[index1].innerHTML === boxes[index3].innerHTML
    ) {
      const boxes = document.getElementsByClassName("box"); // removing event listening for game stop
      [...boxes].forEach((box) => {
        box.removeEventListener("click", handleBoxClick); // work in combination with
      });
      return true;
    } else {
      return false;
    }
  }
  return false;
};

const defineWhoWin = () => {
  if (calculateWinerPerline(0, 1, 2)) winnerName();
  else if (calculateWinerPerline(3, 4, 5)) winnerName();
  else if (calculateWinerPerline(6, 7, 8)) winnerName();
  else if (calculateWinerPerline(0, 3, 6)) winnerName();
  else if (calculateWinerPerline(1, 4, 7)) winnerName();
  else if (calculateWinerPerline(2, 5, 8)) winnerName();
  else if (calculateWinerPerline(0, 4, 8)) winnerName();
  else if (calculateWinerPerline(2, 4, 6)) winnerName();
  else console.log("No Winner");

  return "No Winner";
};

const winnerName = () => {
  if (isPlayer1Active) message.innerHTML = "X win!";
  else message.innerHTML = "O win!";
};

const message = document.createElement("div");
const createWinMessage = () => {
  //const message = document.createElement("div"); //need to put it outside the method so i can diplay message
  message.innerHTML = defineWhoWin();
  message.addEventListener("click", (event) => {
    input.value += event.target.innerHTML;
    console.log("message");
  });
  board.appendChild(message);
  message.style.border = "5px solid rgb(129, 198, 245) ";
  message.style.color = " rgb(243, 83, 9)";
  message.style.display = "flex";
  message.style.justifyContent = "center";
  message.style.alignItems = "center";
  message.style.width = "200px";
  message.style.height = "60px";
  message.style.fontSize = "27px";
  message.style.fontFamily = "Nunito', sans-serif";
};
createWinMessage();
//location.reload
const createRestartButton = () => {
  const newGame = document.createElement("button");
  newGame.innerHTML = "New Game"; //restartGame();
  body = document.getElementsByTagName("body")[0];
  board.appendChild(newGame);

  newGame.style.border = "5px solid rgb(129, 198, 245) ";
  newGame.style.color = " rgb(243, 83, 9)";
  newGame.style.display = "flex";
  newGame.style.justifyContent = "center";
  newGame.style.alignItems = "center";
  newGame.style.width = "200px";
  newGame.style.height = "60px";
  newGame.style.borderRadius = "15px";
  newGame.style.backgroundColor = "white";
  newGame.style.fontSize = "25px";
  newGame.style.fontFamily = "Nunito', sans-serif";

  newGame.addEventListener("click", (event) => {
    location.reload();
    console.log("reload");
  });
};
createRestartButton();
