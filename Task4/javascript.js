const url  = "https://api.openweathermap.org/data/2.5/"
const key = "74d64b4e488477e34a604ae6c7b7e691"
const input = document.getElementById("searchbar")
const btn = document.getElementById("btn");
const img = document.getElementById("img");

const getData = () => {
    const link = `${url}weather?q=${input.value}&appid=${key}&units=metric&lang=tr`;
    fetch(link)
    .then(data => data.json())
    .then(getInfo);
    
}
const getInfo = (value) => {
     const temp = document.querySelector(".temp")
     temp.innerHTML = `${Math.round(value.main.temp)}°C`
     const desc = document.querySelector(".desc")
     desc.innerHTML = `${value.weather[0].description}`
     const city = document.querySelector(".city")
     city.innerHTML = `${value.name}`
    const feels = document.querySelector(".Feels-text")
     feels.innerHTML = `${Math.round(value.main.feels_like)}°C`
     const humidty = document.querySelector(".humidty-text")
     humidty.innerHTML = `${Math.round(value.main.humidity)}°C`


if (value.weather[0].description == "açık"){
       img.src = "image/sun.png";
     }
else if(value.weather[0].description == "az bulutlu"){
    img.src = "image/cloud.png";
  }
  else if(value.weather[0].description == "kar"){
    img.src = "image/snowy.png";
  }
  else if(value.weather[0].description == "parçalı bulutlu"){
    img.src = "image/cloudy.png";
  }
  else if(value.weather[0].description == "sağanak yağmur"){
    img.src = "image/rainvery.png";
  }
  else if(value.weather[0].description == "yoğun kar"){
    img.src = "image/sun.png";
  }
  else if(value.weather[0].description == "yağmur"){
    img.src = "image/rainy.png";
  }
  else if(value.weather[0].description == "kapalı"){
    img.src = "image/cloudysun.png";
  }
     

}

btn.addEventListener("click",getData)
