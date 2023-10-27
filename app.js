showTime();

function showTime () {
    let clock = document.getElementById('clock');
    const d = new Date();
    let hour = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();

    if (hour < 10) {
    hour = '0' + hour;
    }

    if (minutes < 10) {
    minutes = '0' + minutes;
    }

    if (seconds < 10) {
    seconds = '0' + seconds;
    }
    currentTime = hour + ' : ' + minutes + ' : ' + seconds;
    clock.innerText = currentTime;

    setTimeout(showTime, 1000);
}