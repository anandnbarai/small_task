const dateEl = document.getElementById("date")
const monthEl = document.getElementById("month")
const yearEl = document.getElementById("year")
const hoursEl = document.getElementById("hours")
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")
const millisecondsEl = document.getElementById("milliseconds")
const ampmEl = document.getElementById("ampm")

function updateClock() {

    //! The new Date().getHours(), new Date().getMinutes(), and new Date().getSeconds() 
    //! methods return the current hour, minute, and second, respectively.
    let d = new Date().getDate()
    let mo = new Date().getMonth()
    let y = new Date().getFullYear()
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ms = new Date().getMilliseconds()
    
    let ampm = "AM"
  
    if (h > 12) {
        h = h - 12
        ampm = "PM"
    }

    d = d < 10 ? "0" + d : d;
    mo = mo < 10 ? "0" + mo : mo;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    ms = ms < 10 ? "0" + ms : ms;

    dateEl.innerText = d;
    monthEl.innerText = mo;
    yearEl.innerText = y;
    hoursEl.innerText = h;
    minutesEl.innerText = m;
    secondsEl.innerText = s;
    millisecondsEl.innerText = ms;
    ampmEl.innerText = ampm;

    //! sets a timeout to call the updateClock() function every 1000 milliseconds (1 second).
    setTimeout(() => {
        updateClock()
    }, 1)
}

updateClock()