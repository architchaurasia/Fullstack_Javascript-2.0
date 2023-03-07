let promise = new Promise(function(resolve, reject){
    let a = 0;

    if(a == 0){
        resolve("Solved")
    }
    else
    {
        reject("Error")
    }
});

console.log(promise);