const apiKey = "dafc64499575e06a52877327de807cd4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function checkweather(){
    const response = await fetch(`${apiUrl}&appid=${apiKey}`);
    var data = await response.json();

    console.log(response)

    console.log(data);
}


checkweather();