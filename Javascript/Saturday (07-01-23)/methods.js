// Methods are object inside object

const user = {
    firstName: "Archit",
    lastName: "Chaurasia",

    skills: {                        //object inside object(skills) are also called methods
        skill1: "HTML",
        skill2: "CSS"
    }
}

console.log(user.skills) //shows the skills objects

console.log(user.skills.skill1); //Access object inside an object

user.firstName = "Aman"; //It get modified becoz inside object its not constant so it can be change

console.log(user.firstName);