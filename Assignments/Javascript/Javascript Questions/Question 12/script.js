// Q.12 Create a human readable time format using the Date time object
    // - YYYY-MM-DD HH:mm
    // - DD-MM-YYYY HH:mm
    // - DD/MM/YYYY HH:mm

function addZero(zeroBefore){
    if(zeroBefore < 10){
        zeroBefore = "0" + zeroBefore  
        return zeroBefore;
    }
    return zeroBefore;
}    

const d = new Date();

let year = d.getFullYear();

let month = d.getMonth() + 1;
month = addZero(month);

let date = d.getDate();
date = addZero(date);

let hours = d.getHours();
hours = addZero(hours);

let minutes = d.getMinutes();
minutes = addZero(minutes);

console.log(`YYYY-MM-DD HH:mm : ${year}-${month}-${date} ${hours}:${minutes}`);
console.log(`DD-MM-YYYY HH:mm : ${date}-${month}-${year} ${hours}:${minutes}`);
console.log(`DD/MM/YYYY HH:mm : ${date}/${month}/${year} ${hours}:${minutes}`);