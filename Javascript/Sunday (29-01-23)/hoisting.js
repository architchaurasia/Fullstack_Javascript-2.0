// Undefined
console.log(a);  //access variable before initialize

var a = 1;

//Temporal deadzone
console.log(b)   //
                //Before a it creates a temporal deadzone || From hoisting to till time the initialize with same value
let b = 2;     // here const also creates temporal deadzone