let hof = (n) => {
    return n * 2;   
}

function callback(hof, n){
    return hof(n);
}

console.log(callback(hof, 2));