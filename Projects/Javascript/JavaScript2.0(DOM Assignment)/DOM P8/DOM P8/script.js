//#1 Add scroll to side text

let sideText = document.getElementsByClassName("col-lg-4 new")[0];
sideText.style.overflowY ="scroll";
// console.log(text);

let hr = document.createElement('hr');
hr.className = 'hr-line';
sideText.appendChild(hr);

let h2 = document.createElement('h2');
h2.className = 'new-head'
h2.textContent ='This is my custom heading';
sideText.appendChild(h2)

let p = document.createElement('p');
p.className = 'new-p';
p.textContent = 'This is my custom paragraph';
sideText.appendChild(p);

//#2 Remove background
var backgroundImage = document.getElementsByTagName('body')[0]

backgroundImage.style.backgroundImage = 'none';


//#3 Add collapse and expand 
let navBtn = document.querySelector('.navbar-toggler');
let collapse = document.getElementsByClassName('collapse navbar-collapse')[0]
// console.log(collapse);

navBtn.addEventListener('click', () => {
    if(collapse.style.display === "flex"){
        collapse.style.display = "none";
    }
    else{
        collapse.style.display = "flex";
    }
})