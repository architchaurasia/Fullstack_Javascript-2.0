function x(){
    var a =10;
    function y(){
        console.log(a)
    }
    return y;
}

let z = x();
z();

console.log(z);