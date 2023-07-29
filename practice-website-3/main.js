const toggleList = () => {
    const ul = document.querySelector(".navbar ul");
    const i = document.querySelector(".navbar i");
    ul.classList.toggle("show");
    i.classList.toggle("bi-x-lg");
}