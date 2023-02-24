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
  `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&days=6&q=${value}`
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

//ForecastImage 

const foreImg1 = document.getElementById("foreImg1");
const foreImg2 = document.getElementById("foreImg2");
const foreImg3 = document.getElementById("foreImg3");
const foreImg4 = document.getElementById("foreImg4");
const foreImg5 = document.getElementById("foreImg5");

foreImg1.src = data.forecast.forecastday[1].day.condition.icon;
foreImg2.src = data.forecast.forecastday[2].day.condition.icon;
foreImg3.src = data.forecast.forecastday[3].day.condition.icon;
foreImg4.src = data.forecast.forecastday[4].day.condition.icon;
foreImg5.src = data.forecast.forecastday[5].day.condition.icon;

//Forecast Status

const foreStatus1 = document.getElementById("fore_status1");
const foreStatus2 = document.getElementById("fore_status2");
const foreStatus3 = document.getElementById("fore_status3");
const foreStatus4 = document.getElementById("fore_status4");
const foreStatus5 = document.getElementById("fore_status5");

foreStatus1.innerHTML = data.forecast.forecastday[1].day.condition.text;
foreStatus2.innerHTML = data.forecast.forecastday[2].day.condition.text;
foreStatus3.innerHTML = data.forecast.forecastday[3].day.condition.text;
foreStatus4.innerHTML = data.forecast.forecastday[4].day.condition.text;
foreStatus5.innerHTML = data.forecast.forecastday[5].day.condition.text;

}

