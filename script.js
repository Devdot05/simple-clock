// Getting Element By Dom
let year = document.getElementById('year');
let month = document.getElementById('month');
let day = document.getElementById('day');
let today = document.getElementById('today');
let hour = document.getElementById('hour');
let min = document.getElementById('minute');
let sec = document.getElementById('seconds');


const time = new Date()
let update = () => {
    let time = new Date()
    let _year = String(time.getFullYear());
    let _month = String(time.getMonth ());
    let _day = String(time.getDate());
    let _today = String(time.getDay());
    let _hour = String(time.getHours()) % 12;
    // let _minute = String(time.getMinutes());
    let _seconds = String(time.getSeconds());

    year.textContent = _year
    if(_month == '0'){
        month.textContent = 'Jan'
    }
    else if(_month == '1') {
        month.textContent = 'Feb'
    }
    else if(_month == '2') {
        month.textContent = 'Mar'
    }
    else if(_month == '3') {
        month.textContent = 'Apr'
    }
    else if(_month == '4') {
        month.textContent = 'May'
    }
    else if(_month == '5') {
        month.textContent = 'Jun'
    }
    else if(_month == '6') {
        month.textContent = 'Jul'
    }
    else if(_month == '7') {
        month.textContent = 'Aug'
    }
    else if(_month == '8') {
        month.textContent = 'Sep'
    }
    else if(_month == '9') {
        month.textContent = 'Oct'
    }
    else if(_month == '10') {
        month.textContent = 'Nov'
    }
    else if(_month == '11') {
        month.textContent = 'Dec'
    }

    day.textContent = _day
    if(_today == '1'){
        today.textContent ='Mon'
    }
    else if(_today == '2'){
        today.textContent = 'Tue'
    }
    else if(_today == '3'){
        today.textContent = 'Wed'
    }
    else if(_today == '4'){
        today.textContent = 'Thus'
    }
    else if(_today == '5'){
        today.textContent = 'Fri'
    }
    else if(_today == '6'){
        today.textContent = 'Sat'
    }
    else if(_today == '7'){
        today.textContent = 'Sun'
    }

    hour.textContent = _hour;
    min.textContent = String(time.getMinutes()).padStart(2, '0');
    sec.textContent = _seconds

}

setInterval(
    update,1000
)