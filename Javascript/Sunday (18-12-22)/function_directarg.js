//direct arugument

function sum(){
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum = sum + arguments[i];
    }
    return sum;
}

// let arraydata = (1, 2, 3, 4, 5, 12);

// let result = sum(arraydata);

// console.log(result)

console.log(sum(1, 2, 3, 4));