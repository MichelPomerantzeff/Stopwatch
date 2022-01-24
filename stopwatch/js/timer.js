$('h1').html('Stopwatch')

const hour = $('<span class= "digit">').html('0')
const min = $('<span class= "digit">').html('0')
const sec = $('<span class= "digit">').html('0')
const unitHour = $('<span class= "digit">').html('0')
const unitMin = $('<span class= "digit">').html('0')
const unitSec = $('<span class= "digit">').html('0')
const separatorHour = $('<span class= "separator">').html(':')
const separatorMin = $('<span class= "separator">').html(':')
const startBtn = $('<button class= "start button">').html('Start').click(start)
const pauseBtn = $('<button class= "pause button">').html('Pause').click(pause)
const resetBtn = $('<button class= "reset button">').html('Reset').click(reset)

$('.description').append('<span class= "label">hours')
$('.description').append('<span class= "label">minutes')
$('.description').append('<span class= "label">seconds')

$('.timer').append(hour, unitHour, separatorHour, min, unitMin, separatorMin, sec, unitSec)
$('.buttons').append(startBtn, pauseBtn, resetBtn)


let h = 0
let m = 0
let s = 0
let uh = 0
let um = 0
let us = 0
let interval = 1000
let updateTime


function start() {
    clearInterval(updateTime)
    updateTime = setInterval(() => {
        timer()
    }, interval);
}

function pause() {
    clearInterval(updateTime)
}

function reset() {
    clearInterval(updateTime)
    h = 0
    m = 0
    s = 0
    uh = 0
    um = 0
    us = 0
    hour.html(h)
    min.html(m)
    sec.html(s)
    unitHour.html(uh)
    unitMin.html(um)
    unitSec.html(us)
    
}

function timer() {
    us ++
    if(us == 10) {
        us = 0
        s++

        if(s == 6) {
            s = 0
            um++

            if(um == 10) {
                um = 0
                m ++

                if(m == 6) {
                    m = 0
                    uh ++

                    if(uh == 10) {
                        uh = 0
                        h++

                    } else if(h == 2 && uh == 4) {
                        clearInterval(updateTime)
                    }
                }
            }
        }
    }

    hour.html(h)
    min.html(m)
    sec.html(s)
    unitHour.html(uh)
    unitMin.html(um)
    unitSec.html(us)
}