let turnNumber = 1, rightAnswer = 0, wrongAnswer = 0;
let user = () => {
    let userChoice = confirm("Do you want to play Maths Quiz ( Y,N ) ?");
    if (userChoice) {
        alert("You have 7 questions to answer 🤓");
        turnNumber = rightAnswer = wrongAnswer = 0;
    }
    else {
        document.body.innerHTML = "<h1>Thanks, 😇</h1>";
    }
}

user();

let color = ["#fff200", "#00ff6e", "#00d9ff", "#8400ff", "#ff00d4", "#ff005d", "#ff0000"];
let operation = ["+", "-", "*", "/"];
let correctText = "Correct answer ( ^_^ )  😄";
let wrongText = "Wrong answer ( *_* )  🙁";
let div_list = document.querySelectorAll(".main .buttons div")
let submit_btn = document.querySelector(".main .options button")
let answerDiv = document.querySelector(".answer");
let answer_input = document.querySelector(".buttons input") 

answer_input.addEventListener("focus", () => {
    answer_input.value = "";
});


submit_btn.addEventListener("click", () => {

    answerDiv.classList.add("answerCheck")
    let answer = Math.floor(eval(`${div_list[0].textContent.trim()}${div_list[1].textContent.trim()}${div_list[2].textContent.trim()}`)) == answer_input.value.trim();

    if (answer) {
        rightAnswer++;
        answerDiv.classList.replace("wrong", "correct")
        answerDiv.textContent = correctText;
    }
    else {
        wrongAnswer++;
        answerDiv.classList.replace("correct", "wrong")
        answerDiv.textContent = wrongText;
    }

    setTimeout(() => {
        answerDiv.classList.remove("answerCheck");
    }, 1000)

    div_list[0].textContent = "  " + Math.floor(Math.random() * 10);
    div_list[1].textContent = "  " + operation[Math.floor(Math.random() * 4)];
    div_list[2].textContent = "  " + Math.floor(Math.random() * 10 + 1);
    answer_input.value = "  ?";

    main.style.background = color[Math.floor(Math.random() * color.length)];

    turnNumber++;
    if (turnNumber == 7) {

        setTimeout(() => {
            alert(`
                Game over \n
                Right answer : ${rightAnswer}\n
                Wrong answer : ${wrongAnswer}\n
                Your score ${rightAnswer} / 7\n
                `)
            user();
        }, 1000)
    }
});


