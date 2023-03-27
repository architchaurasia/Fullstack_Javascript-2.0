let aTagCourse = Array.from(document.getElementsByTagName('a'));
let mainLanguages = document.getElementsByClassName("main__languages")[0];
let form_input = document.getElementsByClassName("main__form-input")[0];
let submitBtn = document.querySelector(".main__form-btn");
form_input.removeAttribute("disabled")
submitBtn.removeAttribute("disabled")

// console.log(submitBtn);


aTagCourse.forEach(e => {
        if(e.innerText.includes("2.0")){
            mainLanguages.removeChild(e)
        }
})

let store = localStorage.getItem("inputs")
if(store){
    store = JSON.parse(localStorage.getItem("inputs"))
}
else{
    store =[]
}

submitBtn.addEventListener('click', () => {
    store.push(form_input.value)
    localStorage.setItem("inputs", JSON.stringify(store))
    appendInput(form_input.value)
})

let appendInput = (input) =>{
    let a = document.createElement("a")
    a.href = 'https://www.ineuron.ai';
    a.target = '_blank';
    a.innerText = input
    mainLanguages.appendChild(a)
    // console.log(a);
}

let getInput = JSON.parse(localStorage.getItem("inputs"))
getInput.forEach((text) => appendInput(text));

