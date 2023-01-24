let flowers = {
    flower1: 'Rose',
    flower2: 'Sunflower',
    flower3: 'Jasmine',
}

const obj1 = Object.create({});
Object.defineProperty(obj1, 'flower1', {
    get: () => 'Orchids',
    enumerable: true
})

console.log(obj1.flower1);

console.log(obj1);

console.log(Object.getPrototypeOf(obj1));


//Doing loop
for(k in obj1){
    console.log('What flower it is?: ',k)
}


//Method 2 (Not recommended)
// const obj2 = Object.create({});
// obj2.flower1 = 'Lavinder';

// console.log(obj2);