//Destructuring
const periods = ["1st Period", "2nd Period", "3rd Period", "4th Period", "5th Period", "6th Period"]

let [English, Hindi, Maths, Computer, Art, swimming] = periods

console.log(English, Hindi, Maths, Computer, Art, swimming);

//Rest
const num = [1, 2, 3, 4, 5, 6, 7];

let [a, b, ...rest] = num;

console.log(rest);