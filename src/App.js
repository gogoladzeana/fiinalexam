import { useState } from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Weather from './components/weather';
import {InfoContext} from "./components/InfoContext"




function App() {
const [weather,setWeather]=useState(12)

  return (

    <div>
      <InfoContext.Provider value={{
        weather,
        setWeather
      }} >
      <Weather/>
      </InfoContext.Provider>
      <NavBar/>
          
    </div>
  );
}

export default App;

