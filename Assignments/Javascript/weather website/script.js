//Current Weather Data

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
const apiKey = "80ea4396794046fb8b6133610231902";
const fetchData = await fetch(
  `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${value}`
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

//Forecast Data
const day = document.getElementById("fore_day");
const icon = document.getElementById("foreImg");
const fore_status = document.getElementById("fore_status");

let days = [
  "Sunday",
  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
  "Saturday"
];

console.log(days[data.forecast.forecastday[0].date.getDay()]);

// let otherDayForecast = ' '
// data.forecast.forecastday.foreach((day, index) => {
//   if(index == 1){

//   }else{
//    otherDayForecast += `
//    <div class="fore_card">
//    <p id="fore_day">Friday</p>
//    <img src="" id="foreImg" alt="icon">
//    <p id="fore_status">__</p>
//    </div>
//    ` 
//   }
// })

console.log(data.forecast.forecastday)

}

