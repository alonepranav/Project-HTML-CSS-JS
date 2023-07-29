let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

// Setting th edefault angle of Hour, Minute and Second Hand
(() => {
    let time = new Date;

    second.style.transform = `translate(200px, 195px) rotate(${time.getSeconds() * 6 - 90}deg)`;

    minute.style.transform = `translate(200px, 195px) rotate(${time.getMinutes() * 6 + time.getSeconds() * 0.1 - 90}deg)`;

    hour.style.transform = `translate(200px, 195px) rotate(${time.getHours() * 30 + time.getMinutes() * 0.5 - 90}deg)`;

})()

// Changing the angle of hour, minute and second hand every 1second

setInterval(() => {
    let time = new Date;
    
    second.style.transform = `translate(200px, 197px) rotate(${time.getSeconds() * 6 - 90}deg)`;
    
    minute.style.transform = `translate(200px, 197px) rotate(${time.getMinutes() * 6 + time.getSeconds() * 0.1 - 90}deg)`;
    
    hour.style.transform = `translate(200px, 197px) rotate(${time.getHours() * 30 + time.getMinutes() * 0.5 - 90}deg)`;
    
}, 1000)