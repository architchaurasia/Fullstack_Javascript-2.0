let flowers = {
    flower1: 'Rose',
    flower2: 'Sunflower',
    flower3: 'Jasmine',
}

const obj = Object.create(flowers);
console.log(obj) //new Objects are created inside the object prototype

console.log(obj.flower2);

console.log(Object.getPrototypeOf(obj));
