const show_time = () => {

    const time = new Date();

    const time_div = document.querySelectorAll(".box div p");

    time_div[0].textContent = time.getHours() % 12 < 10 ? "0" + time.getHours() % 12 : time.getHours() % 12;
    time_div[1].textContent = time.getMinutes() % 60 < 10 ? "0" + time.getMinutes() % 60 : time.getMinutes() % 60;
    time_div[2].textContent = time.getSeconds() % 60 < 10 ? "0" + time.getSeconds() % 60 : time.getSeconds() % 60;
}

setInterval(show_time, 1000);
