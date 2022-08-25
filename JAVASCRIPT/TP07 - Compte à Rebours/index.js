const form = document.getElementById("form");
const choice = document.getElementById("choice");
const countdownDisplay = document.getElementById("countdownDisplay");

let totalSeconds;
let interval;

function countDown() {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  let sec = seconds < 10 ? "0" + seconds : seconds;

  countdownDisplay.textContent = `${minutes} : ${sec}`;

  if (totalSeconds > 0) {
    totalSeconds--;
  } else {
    countdownDisplay.textContent = "C'est terminé !";
    clearInterval(interval);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (isNaN(choice.value)) {
    alert("Entrez un chiffre avant que je me fâche");
  } else {
    totalSeconds = choice.value * 60;
    choice.value = "";
    clearInterval(interval);
    interval = setInterval(countDown, 1000);
  }
});
