//Write a program which tells the number of days in a month.

function daysInMonth (month, year) {
    let days = new Date(year, month, 0).getDate();
    return days;
}

console.log(daysInMonth(2, 2022));
//Output
//28

