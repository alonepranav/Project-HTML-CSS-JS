let random_color_div = document.querySelector("#random-color");
let button = document.querySelector("#generate_color");
let input_box = document.querySelector("#color-input");
let clipboard_icon = document.querySelector("#clipboard-icon");
let textarea = document.querySelector("textarea")
let select_box = document.getElementById("select_box")
let color1 = document.getElementById("color1")
let color2 = document.getElementById("color2")
let get_random_gradient = document.getElementById("color_btn")
let gradient_div = document.getElementById("gradient")
let gradient = "";


// This function copy the given text to clipboard
let copy_to_clipboard = (value) => {
    navigator.clipboard.writeText(value);
}

// Function to generate randon color in hex format
let get_random_color = () => {
    let str = "123456789abcdef"
    let color = "#"

    for (var i = 0; i < 6; i++)
        color += str.charAt(Math.floor(Math.random() * str.length));

    return color;
}

let change_text = () => {
    gradient = `linear-gradient(${select_box.value},${color1.value},${color2.value})`;
    textarea.value = gradient;
    gradient_div.style.background = gradient;
}

// Function to generate random gradient
let get_random_gradients = () => {
    let c1 = get_random_color();
    let c2 = get_random_color();
    gradient = `linear-gradient(${select_box.value},${c1},${c2})`;
    textarea.value = gradient;
    color1.value = c1;
    color2.value = c2;
    gradient_div.style.background = gradient;
}

color1.addEventListener("input", change_text);
color2.addEventListener("input", change_text);
select_box.addEventListener("change", change_text);

textarea.addEventListener("click", () => {
    copy_to_clipboard(gradient);
});

get_random_gradient.addEventListener("click", () => {
    get_random_gradients();
})

clipboard_icon.addEventListener("click", () => {
    clipboard_icon.classList.replace("bi-clipboard", "bi-clipboard-check")
    setTimeout(() => {
        clipboard_icon.classList.replace("bi-clipboard-check", "bi-clipboard")
    }, 1500);
    copy_to_clipboard(input_box.value);
})

button.addEventListener("click", () => {
    let color = get_random_color();
    input_box.value = color;
    random_color_div.style.background = color;
    clipboard_icon.classList.replace("bi-clipboard-check", "bi-clipboard")
})

get_random_gradients();