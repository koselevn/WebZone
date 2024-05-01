const timeEl = document.querySelector('#time')

let time = 60;
let min = 2;
let an = 0;
function Stat() {
    start()
}


function start() {
    setInterval(decreaseTime, 1000)
    if (time === 60) {
        timeEl.innerHTML = `0${min}:00`
    }
}

function decreaseTime() {
    if (time === 0) {
        finish()
        time += 60
        min -= 1
        an += 1
        start()
    } else if (an === 0) {
        let curent = --time
        if (curent < 10) {
        curent = `0${curent}`
    }
    timeEl.innerHTML = `01:${curent}`
    }  else if (an === 1) {
        let curent = --time
        if (curent < 10) {
        curent = `0${curent}`
    }
    timeEl.innerHTML = `00:${curent}`
    } 
}


function finish() { 
    timeEl.parentNode.classList.add('hide')
}