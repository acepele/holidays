let monthName;
let holiday1;
let holiday2;

function getMonthData(monthChecker) {
    switch (monthChecker) {
        case 1:
            monthName = "January";
            holiday1 = "New Years"
            holiday2 = "MLK Day"
            break;
        case 2:
            monthName = "February";
            holiday1 = "Valentines"
            holiday2 = "President's Day"
            break;
        case 3:
            monthName = "March";
            holiday1 = "Ash Wednesday"
            holiday2 = "St. Patrick's Day"
            break;
        case 4:
            monthName = "April";
            holiday1 = "Easter"
            holiday2 = "International Dance Day"
            break;
        case 5:
            monthName = "May";
            holiday1 = "Memorial Day"
            holiday2 = "National Teacher's Day"
            break;
        case 6:
            monthName = "June";
            holiday1 = "Father's Day"
            holiday2 = "Flag Day"
            break;
        case 7:
            monthName = "July";
            holiday1 = "Independence Day"
            holiday2 = "International Joke Day"
            break;
        case 8:
            monthName = "August";
            holiday1 = "National Mountain Climbing Day"
            holiday2 = "World Lung Cancer Day"
            break;
        case 9:
            monthName = "September";
            holiday1 = "Labor Day"
            holiday2 = "Rosh Hashanah"
            break;
        case 10:
            monthName = "October";
            holiday1 = "Columbus Day"
            holiday2 = "Halloween"
            break;
        case 11:
            monthName = "November";
            holiday1 = "Father's Day"
            holiday2 = "Flag Day"
            break;
        case 12:
            monthName = "December";
            holiday1 = "Christmas Day"
            holiday2 = "New Year's Eve"
            break;
        default:
            monthName = "Not a valid month number";
            holiday1 = "";
            holiday2 = "";
    }
}

function renderMonthData() {
    document.getElementById("monthName").innerHTML = monthName + " holidays include: " + holiday1 + " and " + holiday2 + "<br>";
}

function display() {
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    for (let i = 0; i < months.length; i++) {
        getMonthData(months[i]);

        if (monthName !== "Not a valid month number") {
            renderMonthData();
        }
    }
}