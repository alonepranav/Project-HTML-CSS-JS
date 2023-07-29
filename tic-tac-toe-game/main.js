let winner_span = document.querySelector(".winner span")
let box = document.querySelectorAll(".main .box")
let winner_pop_up = document.querySelector(".winner-pop-up");
let player_info = document.querySelector(".player-info")


// Function to check is the position is valid or not
function is_valid_position(element) {
    return element.dataset.sign === "";
}


// Function to check which player is the winner
function checkWinner() {

    let check_who_is_winner = (s) => {

        return resultArray[0].every(e => e == s)
            || resultArray[1].every(e => e == s)
            || resultArray[2].every(e => e == s)
            || (resultArray[0][0] == s && resultArray[1][0] == s && resultArray[2][0] == s)
            || (resultArray[0][1] == s && resultArray[1][1] == s && resultArray[2][1] == s)
            || (resultArray[0][2] == s && resultArray[1][2] == s && resultArray[2][2] == s)
            || (resultArray[0][0] == s && resultArray[1][1] == s && resultArray[2][2] == s)
            || (resultArray[0][2] == s && resultArray[1][1] == s && resultArray[2][0] == s)
    }

    if (check_who_is_winner("X"))
        return "X"
    else if (check_who_is_winner("O"))
        return "O"
    else
        return null
}

let player = {
    "X": "Player 1",
    "O": "Player 2"
};

let playerSign = ["X", "O"]
let moveNo = 0;

let resultArray = [["", "", ""], ["", "", ""], ["", "", ""]]

box.forEach((element, index) => {

    element.addEventListener("click", () => {

        if (is_valid_position(element)) {

            element.dataset.sign = element.textContent = playerSign[moveNo % 2]

            resultArray[Math.floor(index / 3)][index % 3] = playerSign[moveNo % 2];

            let winner = checkWinner();
            if (winner) {
                winner_span.textContent = player[winner];
                winner_pop_up.style.display = "block";
                winner_pop_up.firstElementChild.firstElementChild.textContent = `Winner ${player[winner]}`
            }
            if (moveNo == 8 && resultArray.flat(Infinity).every(x => x != "")) {
                winner_span.textContent = "Game Tye";
                winner_pop_up.style.display = "block";
                winner_pop_up.firstElementChild.firstElementChild.textContent = "Game Tye"
            }
            moveNo++;

            player_info.innerHTML =
                `<span>${playerSign[moveNo % 2]}</span>
                Player ${moveNo % 2 + 1}, you're turn`
        }
    });
});

// Handling the popup box button closing 
winner_pop_up.querySelector("button").onclick = () => {
    winner_pop_up.style.display = "none";
    location.reload();
}
