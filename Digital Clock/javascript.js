const hoursEl = document.getElementById("hours")
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")
const ampmEl = document.getElementById("ampm")

function updateClock() {

    //! The new Date().getHours(), new Date().getMinutes(), and new Date().getSeconds() 
    //! methods return the current hour, minute, and second, respectively.
    
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"
  
    if (h > 12) {
        h = h - 12
        ampm = "PM"
    }

    //! 
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hoursEl.innerText = h;
    minutesEl.innerText = m;
    secondsEl.innerText = s;
    ampmEl.innerText = ampm;

    //! sets a timeout to call the updateClock() function every 1000 milliseconds (1 second).
    setTimeout(() => {
        updateClock()
    }, 1000)
}

updateClock()