//Logo
let logo = document.getElementsByClassName('logo')[0]
logo.src = './assets/ineuron-logo.png'


//App price
let price = document.querySelectorAll('.app_price > span')[0]
price.innerText = "$10"
// console.log(price);

//Add Linkedin 
let fSocial = document.querySelectorAll('.footer_social')[0];
// console.log(fSocial)

let createDiv = document.createElement('div');
createDiv.classList.add('footer_social_ico');

let linkedinDiv = fSocial.appendChild(createDiv)


let linkedIn = document.createElement('i')
linkedIn.classList.add("fa-brands")
linkedIn.classList.add('fa-linkedin')

linkedinDiv.appendChild(linkedIn);