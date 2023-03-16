//Write a program which tells the number of days in a month, now consider leap year.


function daysInMonth (month, year) {
    let days = new Date(year, month, 0).getDate();
    return days;
}

console.log(daysInMonth(2, 2024));
//Output
//29


