// Data => Done
// Variable to Store the Element => Done
// Function to get the data from weather app
// Manipluate the varibe of already created element

let data;  

const inputSearch = document.getElementById("inputBox")
const country = document.getElementById("countryName")
const state = document.getElementById("stateName")
const city = document.getElementById("cityName")
const humidity = document.getElementById("humidity")
const windSpeed = document.getElementById("windSpeed")
const temp = document.getElementById("temprature")
const logo = document.getElementById("logoImage")
const weatherStatus = document.getElementById("weatherStatus")

const getData = async (event) => {
  event.preventDefault();
  if(!inputSearch.value){
    alert("Please enter any city name");
    return;
  }

const value = inputSearch.value;
const fetchData = await fetch(
  `https://api.weatherapi.com/v1/current.json?key=80ea4396794046fb8b6133610231902&q=${value}`
)

const orgData = await fetchData.json();
data = orgData;

console.log(data );

country.innerHTML = data.location.country;
state.innerHTML = data.location.region;
city.innerHTML = data.location.name;
humidity.innerHTML = data.current.humidity;
windSpeed.innerHTML = data.current.wind_kph;
temp.innerHTML = data.current.temp_c;
logo.src = data.current.condition.icon;
weatherStatus.innerHTML = data.current.condition.text;

}

