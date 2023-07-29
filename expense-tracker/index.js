//  Opening and Closing of usdate and Delete option Div
let add_open_close = () => {
    let p = document.querySelectorAll("ul .text p");
    p.forEach((element) => {
        let icons = element.parentElement.nextElementSibling
        element.addEventListener("click", () => {
            icons.style.height = (icons.style.height == "0px") ? "fit-content" : "0px"
        })
    })
}

// Item array to store all expences and Earnins information in the form of Object
let item = []

let toUpdate = -1;
let title_input = document.getElementById("title")
let amount_input = document.getElementById("amount")


//  Function returns the Li element to append in to the list
const get_render_li = ({ title, amount, type }, index) => {
    let li = document.createElement("li")
    li.classList.add(type == "c" ? "credit" : "debit")
    li.innerHTML = `
                    <div class="text">
                    <p>${title}<span style="float:right">₹ ${amount}</span></p>
                    <span class="type">${type == "c" ? "C" : "D"}</span>
                    </div>
                    <div class="icons">
                    <i class="bi bi-pencil" data-index = ${index}  onclick="update_button(this)"></i>
                    <i class="bi bi-trash3" data-index = ${index}  onclick="delete_button(this)"></i>
                    </div>            
                    `
    return li;
}


// Function render the all elements in the array into the list in the format of Li
const render_items = () => {
    const ul = document.querySelector("ul")
    ul.innerHTML = ""
    item.forEach((element, index) => {
        ul.append(get_render_li(element, index))
    })
    add_open_close();
}


// Function to update Earning and Expences
const update_totals_earning_and_expences = () => {
    const earning_total = document.getElementById("earning_total_amount")
    const expences_total = document.getElementById("expences_total_amount")

    earning_total.textContent = item.filter((a) => {
        return a.amount > 0;
    }).reduce((a, b) => {
        return a + b.amount;
    }, 0)

    expences_total.textContent = -item.filter((a) => {
        return a.amount < 0;
    }).reduce((a, b) => {
        return a + b.amount;
    }, 0)
}

// Calculates total balance 
let calculate_balance = () => {
    const balance_span = document.getElementById("balance_span");

    const total_of_all = item.reduce((x, element) => {
        return element.amount + x;
    }, 0);

    balance_span.innerHTML = "₹ " + total_of_all + (total_of_all == 0 ? "" : total_of_all > 0 ? " Savings" : " Loan");
}


// Update button to update the item
const update_button = (e) => {
    toUpdate = e.dataset.index;
    title_input.value = item[toUpdate].title;
    amount_input.value = Math.abs(item[toUpdate].amount);
}

// Delete button to update the item
const delete_button = (e) => {
    item = item.filter((element, index) => {
        return index != e.dataset.index;
    });
    update_page();
}

// Function that update the whole page on any single change 
let update_page = () => {
    toUpdate = -1;
    title_input.value = amount_input.value = "";
    render_items();
    calculate_balance();
    update_totals_earning_and_expences();
}

// Earning and Expences button click Event
const earning_expences_button_event = (typeThis) => {

    if (title_input.value == "" || amount_input.value == "")
        return;

    if (toUpdate != -1) {
        item[toUpdate].title = title_input.value;
        item[toUpdate].amount = (typeThis == "c") ? Math.abs(+amount_input.value) : -Math.abs(+amount_input.value);
        item[toUpdate].type = typeThis;
    }
    else {
        let x = item.find((e) => {
            return e.title.toLowerCase() == title_input.value.toLowerCase();
        })

        if (x == undefined) {
            let a = {
                title: title_input.value,
                amount: (typeThis == "c") ? Math.abs(+amount_input.value) : -Math.abs(+amount_input.value),
                type: typeThis
            }
            item.push(a);
        }
        else {
            let i = item.indexOf(x);
            item[i].title = title_input.value;
            item[i].amount = (typeThis == "c") ? Math.abs(+amount_input.value) : -Math.abs(+amount_input.value);
            item[i].type = typeThis
        }
    }
    update_page();

}

calculate_balance()
update_totals_earning_and_expences();
render_items();
