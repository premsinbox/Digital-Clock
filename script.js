let ampm=document.getElementById("ampm")

function getTime()
{
let datetime = new Date()
let hours    = datetime.getHours()
let minutes  = digZero(datetime.getMinutes())
let seconds  = digZero(datetime.getSeconds())

let day      = datetime.getDay()
let date     = datetime.getDate()
let month    = datetime.getMonth()
let year     = datetime.getFullYear()

const daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayName   = daysArray[day];

const monthsArray = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
const monthName   =monthsArray[month]

let daydate    =`${dayName} | ${date} ${monthName} ${year}`

if(hours>12)
{
    hours-=12
    ampm.innerHTML="PM"
}

document.getElementById("hours").innerHTML=hours
document.getElementById("minutes").innerHTML=minutes
document.getElementById("seconds").innerHTML=seconds
document.getElementById("daydate").innerHTML= daydate

}

function digZero(num) 
{
    return num<10?"0"+num:num
}

setInterval(getTime,1000)
