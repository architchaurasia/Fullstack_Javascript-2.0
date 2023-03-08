//the variable defined in the outer scope is ‘shadowed’ by the variable defined in the inner scope
//#1
var a = 10;

{
    var a = 20;   //shadowing
    // console.log(a)
}

// console.log(a);


/////////////////////////////////////////////
//#2
let b = 30;

{
    var a = 10;
    let b = 20;
    // console.log(a);
    // console.log(b); //In memmory it created in a block
}

// console.log(b); //In memory it created in a script

/////////////////////////////////////////////
//#3 Use shadow for function
var c = 50;

function shadow(){
    var c = 60;
    // console.log(c);
}

// console.log(c);

/////////////////////////////////////////////
//#4 Illegal
let a = 70;
{
    var a = 80;
    // console.log(a)
}
// console.log(a);