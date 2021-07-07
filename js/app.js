let date = new Date()
let newDate = new Date(date.getTime() - date.getTimezoneOffset()*60*1000);
let minutes = newDate.getMinutes()
let hours;
let timeOfDay;
if (newDate.getHours() > 12) {
    hours = newDate.getHours() % 12
    timeOfDay = "PM"
} else if (newDate.getHours() = 12){
    hours = newDate.getHours()
    timeOfDay = "PM"
} else {
    hours = newDate.getHours()
    timeOfDay = "AM"
}
let s= new Date().toLocaleString()
console.log(s)
console.log(newDate)
$("#time").html(`${hours}:${minutes} ${timeOfDay}`)
console.log($("#time"))