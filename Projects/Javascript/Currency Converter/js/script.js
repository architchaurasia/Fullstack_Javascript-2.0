
const fromDropDown = document.querySelector(".drop-list .from select");
const toDropDown = document.querySelector(".drop-list .to select");
const getButton = document.querySelector("form button");

// From country
country_code.forEach((country_code) => {
    const option = document.createElement("option");
    option.value = country_code;
    option.text = country_code;
    fromDropDown.add(option);
  });

//To country
country_code.forEach((country_code) => {
    const option = document.createElement("option");
    option.value = country_code;
    option.text = country_code;
    toDropDown.add(option);
  });

fromDropDown.value = "INR";
toDropDown.value = "USD";

getButton.addEventListener("click", e => {
    e.preventDefault();
    getExchangeRate();
});

//Fetching api for currency exchange
function getExchangeRate(){
    const amount = document.querySelector(".amount input");
    const exchangeRateTxt = document.querySelector(".exchange-rate");
    let amountVal = amount.value;
    if(amountVal == "" || amountVal == "0"){
        alert("Please enter the amount")
    }
    exchangeRateTxt.innerText = "Result Exchange Rate";
    let url = `https://v6.exchangerate-api.com/v6/abc7d8c4d22f9117c4aed96c/latest/${fromDropDown.value}`;
    fetch(url).then(response => response.json()).then(result => {
        let exchangeRate = result.conversion_rates[toDropDown.value];
        let totalExchangeRate = (amountVal * exchangeRate).toFixed(2);
        exchangeRateTxt.innerText= `${amountVal} ${fromDropDown.value} = ${totalExchangeRate} ${toDropDown.value}`;
    });
}

