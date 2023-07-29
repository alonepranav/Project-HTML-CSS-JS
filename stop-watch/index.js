let sec = 57;
let min = 58;
let millSec = 0;
let minDiv = document.getElementById("min");
let secDiv = document.getElementById("sec");
let millSecDiv = document.getElementById("millSec");
let setTime;
let setMilli;
let button_1 = document.getElementById("reset");
let button_2 = document.getElementById("startStop");

let update = () => {
    if (sec == 59) {
        if (min == 59) {
            alert("We can count time till only 59 mins");
            location.reload()
        }
        min == -1;
        min++;
        sec = -1;
    }
    sec++;
    minDiv.innerHTML = (min >= 0 && min <= 9) ? "0" + min : min;
    secDiv.innerHTML = (sec >= 0 && sec <= 9) ? "0" + sec : sec;
}

let milliSec = () => {
    millSec++;
    millSec = (millSec == 99) ? 0 : millSec;
    millSecDiv.innerHTML = (millSec >= 0 && millSec <= 9) ? "0" + millSec : millSec;
    millSecDiv.innerHTML = millSec;
}
// Reset Button
button_1.addEventListener("click", () => {
    minDiv.innerHTML = "00";
    secDiv.innerHTML = "00";
    millSecDiv.innerHTML = "00";
    button_2.innerText = "Start";
    sec = 0;
    min = 0;
    clearInterval(setTime);
    clearInterval(setMilli);
})

// Start / Stop Button
button_2.addEventListener("click", () => {
    if (button_2.innerText === "Start") {
        setMilli = setInterval(milliSec, 10);
        setTime = setInterval(update, 1000);
        button_2.innerText = "Stop";
    }
    else {
        sec = secDiv.innerText;
        min = Number(minDiv.innerText);
        button_2.innerText = "Start";
        millSecDiv.innerHTML = (millSec >= 0 && millSec <= 9) ? "0" + millSec : millSec;
        clearInterval(setTime);
        clearInterval(setMilli);
    }
})
