const menu_item = [
    {
        image: "./images/chocolate_Drink.jpg",
        title: "Chocolate Drink",
        price: 20,
        id: 0,
        rating: 3,
    },
    {
        image: "./images/buger.jpg",
        title: "Chicken Burger",
        price: 5,
        id: 1,
        rating: 5,
    },
    {
        image: "./images/lasagna.webp",
        title: "Lasagna",
        price: 2,
        id: 2,
        rating: 2,
    },
    {
        image: "./images/chocolate_Drink.jpg",
        title: "Chocolate Drink",
        price: 15,
        id: 3,
        rating: 4
    },
    {
        image: "./images/pizza.jpg",
        title: "Pizza",
        price: 30,
        id: 4,
        rating: 4
    },
    {
        image: "./images/Hot_dog.jpg",
        title: "Hot Dog",
        price: 20,
        id: 5,
        rating: 4
    },
    {
        image: "./images/juse.jpg",
        title: "Juice",
        price: 15,
        id: 6,
        rating: 2
    },
    {
        image: "./images/biryani.webp",
        title: "Biryani",
        price: 40,
        id: 7,
        rating: 5
    },
    {
        image: "./images/chocolate.jpg",
        title: "Chocolate",
        price: 10,
        id: 8,
        rating: 3
    },
    {
        image: "./images/ice_cream.jpg",
        title: "Ice Cream",
        price: 15,
        id: 9,
        rating: 5
    },
    {
        image: "./images/Spanchi.jpg",
        title: "Spinach",
        price: 3,
        id: 10,
        rating: 4
    },
    {
        image: "./images/sandwich.jpg",
        title: "Sandwich",
        price: 7,
        id: 11,
        rating: 4
    },
]



const placeOrder = function (id) {
    id = id.dataset.cardno;
    const item = menu_item.find((item) => item.id == id);
    const order = document.getElementById("order");
    order.classList.add("show")
    const info = document.getElementById("item");
    info.value = `Item : ${item.title}\nPrice : $ ${item.price}.00`

}

const hidediv = () => {
    const order = document.getElementById("order");
    order.classList.remove("show")
}

const card_div = document.getElementById("card-div")

const getStar = (n) => {
    let str = ""
    for (let i = 0; i < n; i++)
        str += "⭐";
    return str;
}


const get_card = ({ image, title, price, id, rating }) => {
    return `
     <div class="card">
        <div class="img">
        <img src="${image}" alt="${title}">
        </div>
        <div class="text">
        <h2>${title}</h2>
            <p class="price">$ ${price}.00</p>
            <p>${getStar(rating)}</p>
            <button data-cardno="${id}" onclick="placeOrder(this)">
            <a href="#home">
            Order Now
            <i class="bi bi-arrow-right"></i>
            </a>
            </button>
            </div>
            </div>`
}

card_div.innerHTML = ""

menu_item.forEach((item) => {
    card_div.insertAdjacentHTML("beforeend", get_card(item));
})


const show_order = () => {
    if (name.value && email.value && address.value && order.value) {
    }
}

const formSubmit = async () => {

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const address = document.getElementById("address");
    const order = document.getElementById("item");

    if (name.value && email.value && address.value && order.value) {
        try {

            name.value = ""
            email.value = ""
            address.value = ""
            order.value = ""
            hidediv();
            alert("Order Placed !👻")

        }
        catch (err) {
            console.log(err);
        }
    }
}


const open_close = () => {
    const ul = document.querySelector("nav ul");
    const i = document.querySelector("nav i");
    ul.classList.toggle("show");
    i.classList.toggle("bi-x-lg");
}