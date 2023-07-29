let accordian = document.querySelectorAll(".accordian");

accordian.forEach((item) => {
    item.addEventListener("click", () => {

        const answer = item.querySelector(".answer")

        if (answer.style.height == "0px")
            answer.style.height = answer.scrollHeight + "" + "px";
        else
            answer.style.height = "0px";

        accordian.forEach((e) => {
            const answer = e.querySelector(".answer")
            if (e != item)
                answer.style.height = "0px";
        })
    })
})
