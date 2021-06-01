function showDate() {

    let date = new Date();
    let $content = document.querySelector(".content");
    let $p = document.createElement("p");

    $p.classList.add("full-date");
    $p.innerHTML = getFullDate();
    $content.appendChild($p);

    function getFullDate() {
        return `${getDayOfWeek(date.getDay())}, ${date.getFullYear()} ${getMonth(date.getMonth())} ${getNumberFormated(date.getDate())}, ${getNumberFormated(date.getHours())}:${getNumberFormated(date.getMinutes())}`;
    };

    function getNumberFormated(number) {
        return number > 9 ? number : `0${number}`;
    }

    function getDayOfWeek(dayOfWeek) {

        switch (dayOfWeek) {
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

    function getMonth(month) {

        switch (month) {
            case 0:
                return "January";
            case 1:
                return "February";
            case 2:
                return "March";
            case 3:
                return "April";
            case 4:
                return "May";
            case 5:
                return "June";
            case 6:
                return "July";
            case 7:
                return "August";
            case 8:
                return "September";
            case 9:
                return "October";
            case 10:
                return "November";
            case 11:
                return "December";
            default:
                return "Other";
        }
    }

}

showDate();