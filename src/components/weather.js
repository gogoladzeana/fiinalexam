import axios from "axios";
import React, { useEffect, useState } from "react";
import './style.css';
import { useContext } from "react";
import { InfoContext } from "./InfoContext";



export default function Weather() {
  const {weather, setWeather} = useContext(InfoContext)

   const weatherApp=()=>{
  axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=Tbilisi&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`)
    .then((response) => {
      setWeather(response.data);
    });
}

useEffect(()=>{
  weatherApp()
}, [])

  return (
    <div className="weather" >
      <p className="weather1">{weather.name}</p>
      <p className="weather2">{weather.main ? <h1>{weather.main.temp.toFixed()}°F</h1> : null} </p>
    </div>
  );
}


