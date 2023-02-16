//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

//Variables Declared
let countries = ["India", "Pakistan", "Nepal", "Ethiopia"] //Remove "Ethiopia" to see


if(countries.includes("Ethiopia")){
    console.log("ETHIOPIA")
    //Output : ETHIOPIA
}
else{
    countries.push("Ethiopia")
    console.log(countries);
    //Output : ["India", "Pakistan", "Nepal", "Ethiopia"]
}