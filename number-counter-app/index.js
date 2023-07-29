let p = document.querySelector("p")
let buttons = document.querySelectorAll("button")

let counter = 0;

buttons.forEach((button, index) => {
    button.onclick = () => {
        if (index == 0)
            counter--;
        else if (index == 1)
            counter = 0;
        else
            counter++;
        p.textContent = counter
    }
})

