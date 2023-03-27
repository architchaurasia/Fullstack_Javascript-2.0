let project = document.querySelector("ul li:nth-child(3)");
project.innerHTML = "Projects"

//Task:1 Add "Hire Me" in navbar. Hide footer social media
let ul = document.getElementsByTagName("ul")[0];
let element = document.createElement("li");
element.innerHTML = "Hire Me";
ul.appendChild(element);

//Hide footer social media
let footer = document.getElementsByTagName("ul")[1];
let remove = footer.style.display = 'none';

//Task:2 Change search box placeholder name "Search My Project"
let search = document.querySelector("input").placeholder = "Search My Project";

//Task:3 Change "Contact to "Projects"
document.getElementsByTagName("span")[2].innerHTML = "an Employee"

document.getElementsByTagName("span")[3].innerHTML = "iNeuron Intelligence Pvt Ltd"

//TAsk:4 Change avatar image
let img = document.querySelector(".hero-right-section > img")
img.src = 'https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg'

//Task:5 Create support me button
let button_1 = document.querySelector(".hero-right-section-btns");

let button_2 = document.createElement("button");
button_2.innerText = "Support Me"

button_1.appendChild(button_2);