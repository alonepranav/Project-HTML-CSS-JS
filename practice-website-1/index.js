const open_close = () => {
    const ul = document.querySelector(".navbar ul")
    const i = document.querySelector(".navbar i")
    i.classList.toggle("bi-x-lg");
    ul.classList.toggle("show");
}