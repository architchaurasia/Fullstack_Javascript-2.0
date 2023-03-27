let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

// Task:1 Achievement and Hobbies opened
const h3selected = Array.from(document.querySelectorAll('.accordian>h3'))

h3selected.forEach(h3 => {
  h3.style.backgroundColor = "#dadaf8";
  let para = h3.nextElementSibling;

  if (["Achievement", "Hobbies"].includes(h3.innerText)) {
      para.style.display = "block";
  } else {
      para.style.display = "none";
  }
})


// Task:2 Only Hobbies opened

const wrapper = document.querySelector(".accordian-wrapper");

const skillDiv = document.createElement('div');
skillDiv.classList.add('accordian');

const skillParent = wrapper.appendChild(skillDiv);

const h3 = document.createElement('h3');
h3.innerText = "Skills"
skillParent.appendChild(h3);

const skillPara = document.createElement('p');
skillPara.innerText = 'I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over GitHub';
skillParent.appendChild(skillPara);


const h3selected2 = Array.from(document.querySelectorAll('.accordian>h3'))

h3selected2.forEach(h3 => {
  h3.style.backgroundColor = "#dadaf8";
  let para = h3.nextElementSibling;


  if (["Skills"].includes(h3.innerText)) {
      para.style.display = "block";
  } else {
      para.style.display = "none";
  }
})

h3selected2.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});