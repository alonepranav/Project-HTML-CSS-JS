let user_input_box = document.getElementById("addToDoInput");
let todo_add_button = document.getElementById("addToDo");
let add_todo_ul = document.getElementById("toDoAdd");

user_input_box.addEventListener("keyup", (e) => {
    if (e.key == "Enter")
        add_new_todo();
})

let delete_todo = (btn) => {
    btn.parentNode.parentNode.remove();
}

let done_todo = (btn) => {
    btn.parentNode.previousElementSibling.style.textDecoration = "line-through";
    btn.innerHTML = "Great";
}

add_todo_ul.addEventListener("click", (e) => {
    if (e.target.value == "delete")
        delete_todo(e.target);
    else if (e.target.value == "done")
        done_todo(e.target);
})

let add_new_todo = () => {

    if (user_input_box.value.trim() === "")
        return;

    let li = document.createElement("li")

    li.innerHTML = `<span class="text">${user_input_box.value}          </span>
    <div>
                    <button class="done-btn" onclick="done_todo(this)">Done</button>
                    <button class="delete-btn" onclick="delete_todo(this)">Delete</button>
                    </div>`

    add_todo_ul.appendChild(li);
    user_input_box.value = "";
}

todo_add_button.onclick = add_new_todo;