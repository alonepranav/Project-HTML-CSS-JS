const home = document.getElementById("home")
const posts = document.getElementById("posts")

const goToComponent = (a) => {
    if (a === "home") {
        home.classList.remove("show_hide");
        posts.classList.add("show_hide");
    }
    else {
        home.classList.add("show_hide");
        posts.classList.remove("show_hide");
    }
}


const icons = document.querySelector(".icons-div .icon")

console.log(icons);

icons.addEventListener("click", (e) => {

    const ul = document.querySelector("nav ul")

    if (e.target.classList.contains("bi-list")) {
        e.target.classList.replace("bi-list", "bi-x-lg")
        ul.classList.add("true")
    }
    else {
        e.target.classList.replace("bi-x-lg", ("bi-list"))
        ul.classList.remove("true")
    }
})


