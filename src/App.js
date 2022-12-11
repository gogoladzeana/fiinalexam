import { Switch } from 'react-router-dom';
import './App.css';
import AboutPage from './components/About';
import HomePage from './components/Home';
import NavBar from './components/Navbar';
import Weather from './components/weather';

function App() {
  return (
    <div>
      <Weather/>
      <Switch>
          <NavBar/>
        <HomePage />
      <AboutPage/>   
      </Switch>
    </div>
  );
}

export default App;

