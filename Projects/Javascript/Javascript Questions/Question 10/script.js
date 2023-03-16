// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//     - 4 > 3
//     - 4 >= 3
//     - 4 < 3
//     - 4 <= 3
//     - 4 == 4
//     - 4 === 4
//     - 4 != 4
//     - 4 !== 4
//     - 4 != '4'
//     - 4 == '4'
//     - 4 === '4'


let a = -4 > 3  //Output: False
console.log(`-4 > 3 : ${a}`)

let b = -4 >= 3  //Output: False
console.log(`-4 > 3 : ${b}`)

let c = -4 < 3  //Output: True
console.log(`-4 > 3 : ${c}`)

let d = -4 <= 3  //Output: True
console.log(`-4 > 3 : ${d}`)

let e = -4 == 3  //Output: False
console.log(`-4 > 3 : ${e}`)

let f = -4 === 3  //Output: False
console.log(`-4 > 3 : ${f}`)

let g = -4 != 3  //Output: False
console.log(`-4 > 3 : ${e}`)

let h = -4 !== 3  //Output: True
console.log(`-4 > 3 : ${h}`)

let i = -4 != '4'  //Output: True
console.log(`-4 > 3 : ${i}`)

let j = -4 == '4'  //Output: False
console.log(`-4 > 3 : ${j}`)

let k = -4 === '4'  //Output: False
console.log(`-4 > 3 : ${k}`)


//     - Find the length of python and jargon and make a falsy comparison statement.

let value1 = "python"
console.log(`Length of python : ${value1.length}`);
//Output: Length of jargon : 6

let value2 = "jargon"
console.log(`Length of jargon : ${value2.length}`);
//Output: Length of jargon : 6

if(value1.length === value2.length){
    console.log(`python === jargon : true`);
}



