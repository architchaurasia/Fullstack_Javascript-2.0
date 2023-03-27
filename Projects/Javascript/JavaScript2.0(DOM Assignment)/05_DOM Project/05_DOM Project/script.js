//Navbar
let button_1 = document.querySelector(".nav-center")
let button_2 = document.createElement("div");
button_2.innerHTML = "Pro subscription"
button_1.appendChild(button_2);
button_2.style.backgroundColor = '#8A2BE2';
button_2.style.color = '#ffffff'; 
button_2.style.padding = '10px 15px' ;
button_2.style.fontSize = '25px';
button_2.style.borderRadius = '3px';

//Recipes
let list_1 = document.querySelector(".tags-container").getElementsByTagName("div")[0]
let list_2 = document.createElement("li");
list_2.innerHTML = "Chinese(7)"
list_1.appendChild(list_2)
list_2.style.listStyle = 'none';
list_2.style.fontSize = '24px';
list_2.style.color = 'brown';

//Recipe-Gallery
let text_1 = Array.from(document.getElementsByClassName("recipe-name"));
// console.log(text_1);

text_1.forEach(e => 
    e.style.color = '#8A2BE2'
    )

let text_2 = Array.from(document.getElementsByClassName("recipe-disp"));

text_2.forEach(e =>
    e.style.color = '#8A2BE2'
)

let card_1 = document.getElementsByClassName("recipe-gallery")
let card_2 = document.createElement('div')
card_1.appendChild(card_2)
card_2.innerHTML = "add 6th card here"