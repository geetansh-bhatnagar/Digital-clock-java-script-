function clock() {
    let h = document.getElementById('h')
    let m = document.getElementById('m')
    let s = document.getElementById('s')
    let ap = document.getElementById('ap')


    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let ampm = h >= 12 ? "Pm" : "Am";

    hours= (hours<10)? "0"+hours: hours;
minutes= (minutes<10)? "0"+minutes: minutes;
seconds= (seconds<10)? "0"+seconds: seconds;
    h.innerHTML = hours;
    m.innerHTML = minutes;
    s.innerHTML = seconds;
    ap.innerHTML = ampm;

}
setInterval(clock,1000);


