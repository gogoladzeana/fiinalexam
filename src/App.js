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
         <NavBar/>
       
      
      </InfoContext.Provider>
     
          
    </div>
  );
}

export default App;

