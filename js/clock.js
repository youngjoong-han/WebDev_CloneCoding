const clock = document.querySelector("h2#clock");

function sayHello(){
    console.log("hello");
}

function getClock(){
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");
    let clockTime = `${hour}:${minute}:${second}`;
    //console.log(clockTime);
    clock.innerText = clockTime;
}

setInterval(getClock, 1000);