let searchBtn=document.getElementById("btn");
 let imgicon=document.getElementById("image");
 let showMap=document.getElementById("mapFrame");



searchBtn.addEventListener("click",function(){
    let cityele=document.getElementById("inpValue").value;
    searchBtn.style.backgroundColor="grey"
    
        cityWeather(cityele);
    })
    
async function cityWeather(city){

  try{ 
     let response= await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=f41a246a8f470c1ca2af0b4af29c7cc5`);
    let data=await response.json();
    console.log(data);
    let { main,weather,sys,wind,coord,name} = data;

document.getElementById("city").textContent=`${name}`;
document.getElementById("Tem").textContent=`${main.temp}°C`;
document.getElementById("max").textContent=`Max:${main.temp_max}°C`;
document.getElementById("min").textContent=`Min:${main.temp_max}°C`;
document.getElementById("hum").textContent=`Humidity:${main.humidity}%`;
document.getElementById("wind").textContent=`Windspeed:${wind.speed}m/s`;
document.getElementById("cloud").textContent= `Clouds:${(weather[0].main).toUpperCase()}`;
document.getElementById("sunrise").textContent=`Sunrise:${new Date(sys.sunrise*1000).toLocaleTimeString()}`;
document.getElementById("sunset").textContent=`Sunset:${new Date(sys.sunset*1000).toLocaleTimeString()}`;

// let weatherimg = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
//  imgicon.src = weatherimg;

if(weather[0].main==="Haze"){
    imgicon.src="https://www.nicepng.com/png/full/123-1236627_haze-icon-png-haze-weather-icon.png"
}
else if (weather[0].main==="Clear"){
    imgicon.src="https://www.nicepng.com/png/detail/73-738655_pastel-colored-symbol-for-partly-cloudy-sky-vector.png"
}
else if (weather[0].main==="Mist"){
    imgicon.src="https://png.pngtree.com/png-vector/20220621/ourmid/pngtree-daytime-foggy-weather-clouds-illustration-png-image_5246770.png"}
    
else if (weather[0].main==="Clouds"){
    imgicon.src="https://www.nicepng.com/png/detail/84-849048_cartoon-cloud-png-clouds-clip-art.png"
}
else if (weather[0].main==="Thunderstorm"){
    imgicon.src="https://www.nicepng.com/png/detail/158-1586210_thunderstorm-png-file-weather-symbols-for-thunderstorms.png"
}
else if (weather[0].main==="Rain"){
    imgicon.src="https://www.nicepng.com/png/detail/797-7978007_rain-icon-image-rain-icon-small.png"
}
else if (weather[0].main==="Snow"){
    imgicon.src="https://www.nicepng.com/png/detail/15-151216_snow-icon-png.png"
}
else if (weather[0].main==="Drizzle"){
    imgicon.src="https://simg.nicepng.com/png/small/1-16710_cloud-clouds-rain-drops-drizzle-rainfall-comments-cute.png"
}
else{
    imgicon.src="https://www.flaticon.com/free-icon/dust_10818244?term=dust+smog&page=1&position=2&origin=search&related_id=10818244"
}

let lon=coord.lon;
let lat=coord.lat;
showMap.src=`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d${lon}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDM4JzExLjEiTiAxN8KwMjEnMjMuMyJF!5e0!3m2!1sen!2sus!4v1627351781291!5m2!1sen!2sus`;
// showMap.src=`https://www.google.com/maps/embed/v1/place?key=AIzaSyCKtrQaW_wjUBTJgsDDbUrj4FroTql0guE&q=${lat},${lon}`;
// showMap.src=`https://maps.googleapis.com/maps/api/js?key=AIzaSyCKtrQaW_wjUBTJgsDDbUrj4FroTql0guE&callback=initMap`



// displayMap(coord)
document.getElementById("root").style.display="flex";
document.getElementById("inpValue").value="";


}
catch (error) {
    console.error('Error in fetching  data:', error);
    document.getElementById("error").innerText="City Not Found";
    document.getElementById("root").innerHTML=""
    
}
}
// function displayMap(positionData) {
//     const { lat, lon } = positionData;
    // let showMap=document.getElementById("mapFrame");

// }


 







