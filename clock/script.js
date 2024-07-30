//getting all elements

const hour = document.getElementById('hour')
const minute = document.getElementById('minutes')
const second = document.getElementById('seconds')
const day = document.getElementById('date')

//array of months

var monthName = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

//function to get values
const clock = setInterval(function time(){
    let today = new Date()
    let d = today.getDate()
    let m = today.getMonth()
    let y = today.getFullYear()
    let min = today.getMinutes()
    let sec = today.getSeconds()
    let h = today.getHours()

    console.log(min)
    day.innerHTML = `${d} ${monthName[m]}, ${y}`
    hour.innerHTML = h
    minute.innerHTML = min
    second.innerHTML = sec
})