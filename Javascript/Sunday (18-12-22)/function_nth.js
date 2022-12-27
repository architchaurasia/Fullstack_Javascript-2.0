function sum(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum = sum + array[i];
    }
    return sum;
}

let arraydata = [1,2,4,6,8,12,14];

let result = sum(arraydata);

console.log(result);
