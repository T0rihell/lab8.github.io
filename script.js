
let playerName = prompt("Введіть ваше ім'я:");
while (!playerName || playerName.trim() === "") {
    playerName = prompt("Якщо ви хочете залишатися анонімом введіть ваш псевдонім, але ім'я має бути обов'язково!");
}
document.getElementById('playerName').textContent = playerName;

let playerScore = 0;
let computerScore = 0;

const playBtn = document.getElementById("playBtn");
const resetBtn = document.getElementById("resetBtn");

resetBtn.disabled = true;

playBtn.addEventListener("click", playGame);
resetBtn.addEventListener("click", resetGame);

function playGame() {
    if (playerScore === 3 || computerScore === 3) return;

    let playerNum = Math.floor(Math.random() * 10) + 1;
    let compNum = Math.floor(Math.random() * 10) + 1;

    document.getElementById("playerNumber").textContent = playerNum;
    document.getElementById("computerNumber").textContent = compNum;

    if (playerNum > compNum) {
        playerScore++;
        document.getElementById("message").textContent = "Ви виграли раунд!";
    } else if (playerNum < compNum) {
        computerScore++;
        document.getElementById("message").textContent = "Комп'ютер виграв раунд!";
    } else {
        document.getElementById("message").textContent = "Нічия!";
    }

    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;

    if (playerScore === 3) {
        document.getElementById("message").textContent = "Це переможна гра для вас!";
        endGame();
    } else if (computerScore === 3) {
        document.getElementById("message").textContent = "Комп'ютер переміг одну гру, але це ще не кінець!";
        endGame();
    }
}

function endGame() {
    playBtn.style.display = "none";
    resetBtn.disabled = false;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("playerScore").textContent = 0;
    document.getElementById("computerScore").textContent = 0;
    document.getElementById("playerNumber").textContent = "-";
    document.getElementById("computerNumber").textContent = "-";
    document.getElementById("message").textContent = "";
    playBtn.style.display = "inline-block";
    resetBtn.disabled = true;
}
