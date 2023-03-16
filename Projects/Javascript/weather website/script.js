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
  `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&days=8&q=${value}`
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
const foreImg6 = document.getElementById("foreImg6");
const foreImg7 = document.getElementById("foreImg7");

foreImg1.src = data.forecast.forecastday[1].day.condition.icon;
foreImg2.src = data.forecast.forecastday[2].day.condition.icon;
foreImg3.src = data.forecast.forecastday[3].day.condition.icon;
foreImg4.src = data.forecast.forecastday[4].day.condition.icon;
foreImg5.src = data.forecast.forecastday[5].day.condition.icon;
foreImg6.src = data.forecast.forecastday[6].day.condition.icon;
foreImg7.src = data.forecast.forecastday[7].day.condition.icon;

//Forecast Status

const foreStatus1 = document.getElementById("fore_status1");
const foreStatus2 = document.getElementById("fore_status2");
const foreStatus3 = document.getElementById("fore_status3");
const foreStatus4 = document.getElementById("fore_status4");
const foreStatus5 = document.getElementById("fore_status5");
const foreStatus6 = document.getElementById("fore_status6");
const foreStatus7 = document.getElementById("fore_status7");

foreStatus1.innerHTML = data.forecast.forecastday[1].day.condition.text;
foreStatus2.innerHTML = data.forecast.forecastday[2].day.condition.text;
foreStatus3.innerHTML = data.forecast.forecastday[3].day.condition.text;
foreStatus4.innerHTML = data.forecast.forecastday[4].day.condition.text;
foreStatus5.innerHTML = data.forecast.forecastday[5].day.condition.text;
foreStatus6.innerHTML = data.forecast.forecastday[6].day.condition.text;
foreStatus7.innerHTML = data.forecast.forecastday[7].day.condition.text;

//Forecast Day
const fore_day1 = document.getElementById('fore_day1');
const fore_day2 = document.getElementById('fore_day2');
const fore_day3 = document.getElementById('fore_day3');
const fore_day4 = document.getElementById('fore_day4');
const fore_day5 = document.getElementById('fore_day5');
const fore_day6 = document.getElementById('fore_day6');
const fore_day7 = document.getElementById('fore_day7');

const data_day1 = data.forecast.forecastday[1].date;
const data_day2 = data.forecast.forecastday[2].date;
const data_day3 = data.forecast.forecastday[3].date;
const data_day4 = data.forecast.forecastday[4].date;
const data_day5 = data.forecast.forecastday[5].date;
const data_day6 = data.forecast.forecastday[6].date;
const data_day7 = data.forecast.forecastday[7].date;

const day1= moment(data_day1).format('dddd');
const day2= moment(data_day2).format('dddd');
const day3= moment(data_day3).format('dddd');
const day4= moment(data_day4).format('dddd');
const day5= moment(data_day5).format('dddd');
const day6= moment(data_day6).format('dddd');
const day7= moment(data_day7).format('dddd');

fore_day1.innerHTML = day1;
fore_day2.innerHTML = day2;
fore_day3.innerHTML = day3;
fore_day4.innerHTML = day4;
fore_day5.innerHTML = day5;
fore_day6.innerHTML = day6;
fore_day7.innerHTML = day7;
}

