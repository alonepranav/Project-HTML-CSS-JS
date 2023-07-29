
let menu = [
    {
        "dish": "Poha",
        "price": "$15.99",
        "category": "breakfast"
    },
    {
        "dish": "Tea",
        "price": "$13.99",
        "category": "breakfast"
    },
    {
        "dish": "Milk",
        "price": "$6.99",
        "category": "breakfast"
    },
    {
        "dish": "Paneer Chili",
        "price": "$20.99",
        "category": "lunch"
    },
    {
        "dish": "Mango SHake",
        "price": "$18.99",
        "category": "shake"
    },
    {
        "dish": "Rajma Rice",
        "price": "$8.99",
        "category": "lunch"
    },
    {
        "dish": "Milk SHake",
        "price": "$12.99",
        "category": "shake"
    }
];

let get_render_component = ({ dish, price }) => {

    let div = document.createElement("div")
    div.classList.add("box")
    div.innerHTML = `<img src="https://source.unsplash.com/random/?food" alt="">
                <div class="text">
                    <p>${dish}<span>${price}</span></p>
                    <hr>
                    <p>Lorem ipsum dolor, s assumenda iste incidunt ducimus nobis.</p>
                </div>`

    return div
}

let render_div = document.querySelector(".renderComponents")

let render = (foodItems) => {
    render_div.innerHTML = ""
    foodItems.forEach((element) => {
        render_div.append(get_render_component(element))
    })
}


let input = document.getElementById("userinput");

input.addEventListener("input", (e) => {
    let renderArray = []
    renderArray = menu.filter((item) => {
        return item.dish.toLowerCase().includes(e.target.value);
    })

    render(renderArray)
})


let buttons = document.querySelectorAll(".buttons button")

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {

        if (e.target.value == "all") {
            render(menu)
            return;
        }

        let renderArray = []
        renderArray = menu.filter((item) => {
            return item.category == e.target.value;
        })

        render(renderArray)
    })
});


render(menu)