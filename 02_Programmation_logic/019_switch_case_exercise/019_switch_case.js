let date = new Date();
let day = date.getDay();
let dayOfWeek = getDayOfWeek(day);

console.log(`Day ${day+1} of the week = ${dayOfWeek}`)

function getDayOfWeek(day){

    switch (day) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Other";
    }
}

