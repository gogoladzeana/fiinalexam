import axios from "axios";
import React, { useEffect, useState } from "react";
import './style.css';



export default function Weather() {
  const [weather, setWeather] = useState({});
  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=Tbilisi&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`)
      .then((response) => {
        setWeather(response.data);
      });
  }, []);

  return (
    <div className="weather" >
      <p>{weather.name}</p>
      <p>{weather.main ? <h1>{weather.main.temp.toFixed()}°F</h1> : null} </p>
    </div>
  );
}