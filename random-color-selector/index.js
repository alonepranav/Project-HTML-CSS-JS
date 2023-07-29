
let p = document.getElementById("para")
let btn = document.getElementById("change-color-btn")

let change_color = () => {
    let color = "#"
    let text = "ABCDEF0123456789";
    for (let i = 0; i < 6; i++)
        color += text[Math.floor(Math.random() * text.length)]
    p.textContent = ` Background Color : ${color}`;
    document.body.style.background = color;
}

btn.addEventListener("click", change_color);