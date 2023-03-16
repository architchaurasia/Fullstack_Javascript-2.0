//Q7. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

let value = ["Great Learning","pw skills", "Linkedin Learning", "Udemy", "Coursera"]

let lastPostion = value.lastIndexOf("pw skills");
console.log(`Last occurrence of word "pw skills":${lastPostion}`);
//Output
//1

let firstPostion = (value.length - 2) - value.reverse().lastIndexOf("pw skills");
console.log(`Last occurrence of word "pw skills":${firstPostion}`);
//Output
//0