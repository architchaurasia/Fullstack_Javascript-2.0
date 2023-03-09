const radius = [2, 3, 4, 6];

const area = function(radius){
    return Math.PI *  radius * radius
}

const circumference = function(radius){
    return 2 * Math.PI * radius;
}

const diameter = function(radius){
    return 2 * radius;
}

const calculation = function(radius, logic){
    const solve = []
    for(let i =0; i < radius.length; i++){
        solve.push(logic(radius[i]))
    }
    return solve;
}

console.log(calculation(radius, area));
console.log(calculation(radius, circumference));
console.log(calculation(radius, diameter));


//Using map
Array.prototype.calculation = function(logic){
    const solve = []
    for(let i =0; i < this.length; i++){
        solve.push(logic(this[i]))
    }
    return solve;
}

console.log(radius.map(diameter));
