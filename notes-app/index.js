


let addBtn = document.querySelector(".add");
let render_div = document.querySelector("#add");
let noteNo = 1;



const getUniqueId = () => {
    const key = 'abcdefghijkfmnopqrstuvwxyz';
    let id = ""
    for (let i = 0; i < 7; i++)
        id += key.charAt(Math.floor(Math.random() * 100 % key.length));
    return id
}

const save = (id) => {
    localStorage.setItem(id.parentElement.parentElement.dataset.key, id.parentElement.nextElementSibling.value);
    renderData()
}
const remove = (id) => {
    localStorage.removeItem(id.parentElement.parentElement.dataset.key);
    renderData()
}

const renderData = () => {
    render_div.innerHTML = "";

    if (localStorage.length == 0) {
        render_div.innerHTML = `<h1>No Notes 😇👻</h1>`
    }

    const data = JSON.parse(localStorage.getItem("data"))

    let i = 1;

    for (const id of Object.keys(localStorage).reverse()) {

        render_div.insertAdjacentHTML("beforeend", `
        <div class="box" data-key="${id}">
            <p>Notes No ${i}
                <i class="bi bi-trash" onclick="remove(this)"></i>
                <i class="bi bi-save"  onclick="save(this)"></i>
            </p>
            <textarea>${localStorage.getItem(id)}</textarea>
        </div>`)
        i++;
    }
}

const insertNewNote = () => {
    localStorage.setItem(getUniqueId(), "");
    renderData()
}


renderData()