// Q11. Use the Date object to do the following activities
    // - What is the year today?
    // - What is the month today as a number?
    // - What is the date today?
    // - What is the day today as a number?
    // - What is the hours now?
    // - What is the minutes now?
    // - Find out the numbers of seconds elapsed from January 1, 1970 to now.

//Variable Declaration
const date = new Date;

//What is the year today?
const todayYear = date.getFullYear();
console.log(`Current Year : ${todayYear}`);  //Output: 2023


//What is the month today as a number?
const todayMonth = date.getMonth() + 1;
console.log(`Current Month(in number) : ${todayMonth}`);


//What is the date today?
const todayDate = date.getDate();
console.log(`Today Date : ${todayDate}`);


// What is the day today as a number?
const todayDay = date.getDay();
console.log(`Today day(in number) : ${todayDay}`);


//What is the hours now?
const currentHours = date.getHours();
console.log(`Current Hours : ${currentHours}`);


//What is the minutes now?
const currentMinutes = date.getMinutes();
console.log(`Current Minutes : ${currentMinutes}`);


//Find out the numbers of seconds elapsed from January 1, 1970 to now.
let date2 = new Date(1970, 1,1)

let currentTime = Math.round(date.getTime() / 1000)  //getTime returns in milliseconds || By dividing 1000 milliseconds into seconds
let elapsedTime = Math.round(date2.getTime() / 1000)

let sec = currentTime - elapsedTime
console.log(`numbers of seconds elapsed from January 1, 1970 to now : ${sec}`);
//Output
//1672702876