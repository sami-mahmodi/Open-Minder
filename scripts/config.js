function openplayerconfig(event) {
  editedPlayer = +event.target.dataset.playerid;

  playerConfigElement.style.display = "block";
  backdropElement.style.display = "block";
}

function cancelFunction() {
  playerConfigElement.style.display = "none";
  backdropElement.style.display = "none";
  form1Element.firstElementChild.classList.remove("error");
  erroroutputElement.textContent = "";
}

function saveplayerconfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get("Username").trim();

  if (!enteredPlayername) {
    event.target.firstElementChild.classList.add("error");
    erroroutputElement.textContent = "Please Enter a correct Name!";
    return;
  }

  const updatedplayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );

  updatedplayerDataElement.children[1].textContent = enteredPlayername;
  players[editedPlayer - 1].name = enteredPlayername;
  cancelFunction();
}
