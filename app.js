

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