let buttons = document.querySelectorAll("button")
let gameMovesName = ["rock", "paper", "scissor"];
let userScore = 0, computerScore = 0, turnNo = 0;
let display = document.querySelector(".result");


let whoIsWinner = (user, computer) => {
    let options = {
        "rock + rock": "tye",
        "rock + paper": "paper",
        "rock + scissor": "rock",
        "paper + paper": "tye",
        "paper + scissor": "scissor",
        "paper + rock": "paper",
        "scissor + scissor": "tye",
        "scissor + rock": "rock",
        "scissor + paper": "scissor",
    }
    return options[`${user} + ${computer}`];
}

// Function to display the alert box for displaying the result 
let displayResult = () => {
    alert(`Game result : 
            Your score : ${userScore}\n
            Computer score : ${computerScore}\n
            Match tye : ${Number(Number(5) - (userScore + computerScore))}\n
            \n\n${(userScore != computerScore) ? ((userScore > computerScore) ? "User Win 🐼" : "Computer Win 🤖") : "Game tye 👔"}
            `)
    location.reload();
}


alert("You have 5 chances\nLets play the rock paper scissor now 😄😄😄");

let computerChoice = () => gameMovesName[Math.floor(Math.random() * 10 % 3)]


buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        let user = btn.value;
        let computer = computerChoice();
        let result = whoIsWinner(user, computer);

        if (result === user)
            userScore++;
        else if (result === computer)
            computerScore++;
        turnNo++;

        let text_to_display = `
                Result : <br>
                Your Score : ${userScore}<br>
                Computer Score : ${computerScore}<br>                
                🐼 ${user} &nbsp; V/S &nbsp;🤖 ${computer}<br>
                
                ${(result === "tye") ? "Tye 👔" : ((result === user) ? "User Win 🐼" : "Computer Win 🤖")}
                `
        display.innerHTML = text_to_display;

        if (turnNo == 5)
            setTimeout(displayResult, 500);
    })
})
