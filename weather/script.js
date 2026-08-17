fetch(`https://geocoding-api.open-meteo.com/v1/search?name=Gwalior&count=1&language=en&format=json`)
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data.results[0].id)
}).catch((error)=>{
    console.log(error)
})

fetch(`https://api.open-meteo.com/v1/forecast?latitude=26.2183&longitude=78.1828&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m`)
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data.latitude)
}).catch((error)=>{
    console.log(error);
})