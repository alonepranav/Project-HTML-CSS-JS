let body = document.querySelector("body");
let box = document.querySelector("input");

let getColor = () => {
    let str = "123456789abcdef"
    let color = "#"

    for (var i = 0; i < 6; i++) {
        color += str.charAt(Math.floor(Math.random() * str.length));
    }

    box.value = color;
    body.style.background = ` linear-gradient( ${color} , ${color} ) `;
}

let clipBoard = document.querySelector(".copyToClipboard");

clipBoard.addEventListener("click", () => {
    navigator.clipboard.writeText(box.value);
    alert("Thanks for using our page 😉")
})

let buttons = document.querySelectorAll("li")
let home = document.querySelector(".home");
let about = document.querySelector(".about");

buttons[0].addEventListener("click", () => {

    home.classList.replace("hide", "show");
    about.classList.replace("show", "hide");
})

buttons[1].addEventListener("click", () => {
    about.classList.replace("hide", "show");
    home.classList.replace("show", "hide");
})