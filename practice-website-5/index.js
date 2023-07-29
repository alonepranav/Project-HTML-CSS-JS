const ul = document.querySelector(".navbar ul")

const links = ['home', 'about', 'category', 'menu', 'contact']
links.forEach((text) => {
    ul.insertAdjacentHTML("beforeend", `<li onclick="open_close()"><a href="#${text}">${text}</a></li>`)
})

const open_close = () => {
    const i = document.querySelector(".navbar i")
    i.classList.toggle("bi-x-lg");
    ul.classList.toggle("show");
}

const food_category = document.querySelector(".category .food-category");
const category = ['Fruits', 'Vegetables', 'Grains']
category.forEach((item, ind) => {
    food_category.insertAdjacentHTML("beforeend",
        `<div class="box" style="background-image: url('./images/food${ind + 1}.jpg');">
        <div class="content">
        <h3>${item}</h3>
        <button class="main">Order Now</button>
        </div>
        </div>`
    );
});

const food_items = [
    [{ title: "Salad", price: 5, }, { title: "Wheat", price: 3, }],
    [{ title: "Brocolli", price: 7, }, { title: "Cut Vegetables", price: 2, }],
    [{ title: "Vegatables", price: 9, }, { title: "Cut Fruits", price: 15, }],
]

const menu_item = document.querySelector(".menu .menu-item");
let i = 1;

food_items.forEach((item) => {

    const div = document.createElement("div")
    div.classList.add("col");

    item.forEach((obj) => {
        div.insertAdjacentHTML("beforeend",
            `
            <div class="box">
                <div class="img">
                    <img src="./images//food-menu${i++}.jpg" alt="">
                </div>
                <div class="text">
                    <h3>${obj.title}</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                    <span>Price : $ ${obj.price}</span>
                </div>
            </div>`
        )
    })
    menu_item.append(div);
})

