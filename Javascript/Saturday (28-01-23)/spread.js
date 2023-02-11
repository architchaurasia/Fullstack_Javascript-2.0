//Spread operator : copy all item into another array or object

//Using Array
const num1 = [1,2,3,4,5,6];

const num2 = [7,8,9,10,11,12];

let comb = [...num1, ...num2];

console.log(comb);

//Using Object
const fruitQuantity = {Mango : 24, Apple : 13, Banana : 14, Stawberry : 10 }

const vegiQuantity = {Tomato : 10, Potato : 30, Garlic : 5}

let total = {...fruitQuantity, ...vegiQuantity}

console.log(total);