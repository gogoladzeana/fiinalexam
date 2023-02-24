import { Link, Route , Switch } from "react-router-dom"
import './style.css';
import AboutPage from "./About"
import HomePage from "./Home";
import NotFound from "./NotFound";



const NavBar =()=>{
    
    return(
        <div>
            <nav className="nav">
                <ul>
                    <li>
                        <Link className="Link" to="/Home">Home</Link>
                    </li> 
                    <li>
                        <Link className="Link" to="/About">About</Link>
                    </li>
                    
                </ul>
            </nav>
            
            <Switch>
            <Route exact path="/"><HomePage/></Route>
            <Route exact path="/Home" ><HomePage/></Route>
            <Route exact path="/About" ><AboutPage/></Route>  
            <Route  path="*" ><NotFound/></Route>  
      </Switch>
        </div>
    )
} 
export default NavBar