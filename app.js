const input = document.querySelector(".input");
const searchBtn = document.getElementById("searchBtn");
const temperatureEl = document.querySelector(".temperature");
const conditionEl = document.querySelector(".condition");
const humidityEl = document.querySelector(".humidity strong");
const forecastEl = document.querySelector(".forecast");

const apiKey = "f9ed8685a1a04f43a94105517261210";
const baseUrl = "http://api.weatherapi.com/v1";

//FETCH the weather and the forecasrrr hre
weatherForm.addEventListener("searchBtn",async event => {

    event.preventDefault();
    const city = cityInput.value;

        if(city){
            try{
                const weatherData = await getWeatherData(city);
                displayWeatherInfo(weatherData);
            }catch(error){
                console.error(error);
                displayError(error);
            }
        }
        else{
            displayError("Please enter a city");
        }
});

async function getWeatherData(city){
fetch(`${baseUrl}/forecast.json?key=${apiKey}&q=${encodeURIComponent(city)}&days=3. encodeURIComponent`).then(res => res.json()).then(data =>{
    console.log(data);
});

}

function displayWeatherInfo(data){


}

function displayError(message){
    alert("Please enter a city")

}

//FETCHES API KEY HERE

    document.getElementById("weatherInfo").innerHTML = `
    <div>
        <h1>${data.current.condition.text}</h1>
        <img src="${data.current.condition.icon}" alt="">
        <p>${data.current.temp_c}°C</p>
        <p>${data.current.humidity}%</p>
    </div>`
    new Date(data).toLocaleDateString("en-US", {weekday:"short"}); //gives mon,tue,etc



