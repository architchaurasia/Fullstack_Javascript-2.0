let btn = document.getElementById("button")

let randomColor = ()=>{
    let colorCode = "0123456789ABCDEF"
    let hash = "#"
    for(let i =0; i < 6; i++){
        hash = hash + colorCode[Math.floor(Math.random()*16)];  
    }
    return hash;
};


function colorTrigger(){
    document.body.style.backgroundColor = randomColor()
    document.getElementById("button").style.backgroundColor = randomColor()
    document.getElementById("button").style.borderColor = randomColor()
}

btn.addEventListener("click", colorTrigger)