const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameisOver = false;
const players = [
  {
    name: "",
    symbol: "x",
  },
  {
    name: "",
    symbol: "o",
  },
];

const playerConfigElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const form1Element = document.querySelector("form");
const erroroutputElement = document.getElementById("config-error");
const gameAreaElement = document.getElementById("active-game");
const activePlayerNameElement = document.getElementById("active-player-name");
const gameOverElement = document.getElementById("game-over");

const editplayer1 = document.getElementById("edit-player-1");
const editplayer2 = document.getElementById("edit-player-2");
const cancle2 = document.getElementById("cancle1");
const startNewGameElement = document.getElementById("start-game-btn");

//const gamefieldElements = document.querySelectorAll("#game-board li");
const gameBoardElement = document.getElementById("game-board");
editplayer1.addEventListener("click", openplayerconfig);
editplayer2.addEventListener("click", openplayerconfig);
cancle2.addEventListener("click", cancelFunction);

form1Element.addEventListener("submit", saveplayerconfig);

startNewGameElement.addEventListener("click", startNewGame);

// for (const gamefieldElement of gamefieldElements) {
//   gamefieldElement.addEventListener("click", selectgamefield);
// }

gameBoardElement.addEventListener("click", selectgamefield);
