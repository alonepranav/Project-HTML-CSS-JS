
const render_div = document.querySelector(".render_user");

const render_user_info = ({ public_repos, login, avatar_url, bio, followers, following, name, location }) => {

    let div = document.createElement("div")
    div.classList.add("card")

    div.innerHTML = ` 
            <div class="img">
                <a href=${"https://github.com/" + login} target="_blank">
                    <img src="${avatar_url}" alt="">
                <a/>
            </div>
            <div class="text">
                ${name && `<h2>${name}</h2>`}
                ${login && `<h3>${login}</h3>`}
                <br>
                ${public_repos != undefined && `<p>Public Repositories: ${public_repos}</p>`}
                ${followers && `<p>Followers : ${followers}</p>`}
                ${following && `<p>Following : ${following}</p>`}
                ${location && `<p>Location : ${location}</p>`}
                ${bio && `<p>Bio : ${bio}</p>`}
                <br>
            </div>`

    render_div.innerHTML = "";
    render_div.append(div);
}

const input = document.getElementById("input_search")
const form = document.querySelector("form")


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let get_user_data = async (username) => {
        let data = await fetch(`https://api.github.com/users/${username}`);
        if (data.ok) {
            data = await data.json();
            console.log(data)
            render_user_info(data)
        }
        else {
            render_div.innerHTML = "User Not Found😄🤖"
        }
    }
    if (input.value.trim() != "")
        get_user_data(input.value.trim());
});
