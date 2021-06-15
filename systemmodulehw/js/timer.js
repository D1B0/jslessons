import {sound, soundStop} from "./alarmTimer.js";

document.getElementById('sound-off')
    .addEventListener('click', soundStop)

let timerInput = document.getElementById("time");
let buttonRun = document.getElementById("button");
let timerShow = document.getElementById("timer1");


buttonRun.addEventListener('click', function () {
    let timer
    let timeMinute = parseInt(timerInput.value) * 60
    timerShow.innerHTML = "";
    timer = setInterval(function () {
        let seconds = timeMinute % 60
        let minutes = timeMinute / 60 % 60
        let hour = timeMinute / 60 / 60 % 60

        if (timeMinute <= 0) {
            clearInterval(timer);
            sound()
        } else {

            let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;

            timerShow.innerHTML = strTimer;

        }


        --timeMinute;
    }, 1000)
})

