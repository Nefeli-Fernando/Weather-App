const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = customElements.querySelector(".card");

const apiKey = "f9ed8685a1a04f43a94105517261210";
const baseUrl = "http://api.weatherapi.com/v1";

weatherForm.addEventListener("Searchbtn",async event => {

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


}

function displayWeatherInfo(data){


}

function displayError(message){
    alert("Please enter a city")

}

//FETCHES API KEY HERE
fetch(`${baseUrl}/current.json?key=${apiKey}&q=Galle`).then(res => res.json()).then(data =>{
    console.log(data);

    document.getElementById("weatherInfo").innerHTML = `
    <div>
        <h1>${data.current.condition.text}</h1>
        <img src="${data.current.condition.icon}" alt="">
        <p>${data.current.temp_c}°C</p>
        <p>${data.current.humidity}%</p>
    </div>`
});


