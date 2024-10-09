const apiKey = "2864f035af98396f4aa4f648ff7dbfee";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

const searchBar = document.querySelector(".search-bar input");
const searchBtn = document.querySelector(".search-btn");

const weatherIcon = document.querySelector(".icon-primary");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".grid").style.display = "none";
    }
    else{


        var data = await response.json();
        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
        document.querySelector(".wind").innerHTML = data.wind.speed + "mph";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    
        if(data.weather[0].main == 'Clouds'){
            weatherIcon.src = "Images/Cloudy.png";
        }
        else if(data.weather[0].main == 'Rain'){
            weatherIcon.src = "Images/rainy.png";
        }
        else if(data.weather[0].main == 'Clear'){
            weatherIcon.src = "Images/sunny.png";
        }
        else if(data.weather[0].main == 'Drizzle'){
            weatherIcon.src = "Images/rainy.png";
        }
        else if(data.weather[0].main == 'Mist'){
            weatherIcon.src = "Images/mist.png";
        }
    
        document.querySelector(".error").style.display = "none";
        document.querySelector(".grid").style.display = "grid";

    }


}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBar.value);
})

checkWeather();


