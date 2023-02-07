//Filter

const data = ["Aman", "Ankit", "Asha", "Anshuman", "Bhawna", "Chaman", "Raman"] 

const dataFilter = data.filter((value)=>
    value.includes("man")
)

console.log(dataFilter);