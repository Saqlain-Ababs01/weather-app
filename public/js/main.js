// const { json } = require("express");
const curDay = document.getElementById("curDay");
const curDate = document.getElementById("curDate");
const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const cityInfo = document.getElementById("cityInfo");
const tempInfo = document.getElementById("tempInfo");
const tempSatuts = document.getElementById("tempSatuts");
const data_hide = document.querySelector(".temp-info");


const date = new Date();

let currentDay= String(date.getDate()).padStart(2, '0');

let currentMonth = String(date.getMonth()+1).padStart(2,"0");

const Month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

// we will display the date as DD-MM-YYYY 

let currentDate =  `${currentDay}/${Month[currentMonth-1]}`


curDate.innerHTML = currentDate;
const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

const d = new Date();
let day = weekday[d.getDay()];
curDay.innerHTML = day;
// console.log("The current date is " + currentDate); 

const getInfo =async(event)=>{
    event.preventDefault()
    cityVal = cityName.value;
    console.log(cityVal);
    // alert("hi")
    if(cityVal === " ")
    {
        cityInfo.innerText = "PLZ enter a right city name";
        data_hide.classList.add('data_hide');
    }
    else{
       
// data_hide.classList.remove('data_hide');

        try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=d3d5dc696cdcc41e2e393415d680ab9a`;
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data]
        // console.log(arrData)
        cityInfo.innerText = arrData[0].name;
        tempInfo.innerText = arrData[0].main.temp;
        const tempMood = arrData[0].weather[0].main;
        console.log(tempMood)
        if(tempMood==="Clear")
        {
            tempSatuts.innerHTML = "<i class='fa-solid fa-sun'></i>"  
        }
        else if(tempMood==="Clouds")
        {
            tempSatuts.innerHTML = "<i class='fa-solid fa-cloud'></i>"  
        }
        else if(tempMood==="Rain")
        {
            tempSatuts.innerHTML = "<i class='fa-solid fa-rain'></i>"  
        }
        else 
        {
            tempSatuts.innerHTML = "<i class='fa-solid fa-cloud'></i>"  
        }
        data_hide.classList.remove('data_hide');
        }
        catch{
            cityInfo.innerText = "PLZ enter a right city name";
            data_hide.classList.add('data_hide');
        }
        
}
    
}
submitBtn.addEventListener('click', getInfo)