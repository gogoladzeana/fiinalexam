import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { useState } from 'react';
import './style.css';

const App =()=>{
  const [value,setValue]=useState('')
  const [country,setCountry]=useState([])
  const Slice = country.slice(0, 15);
  const handleSelect=(e)=>{
    setValue(e)
  fetch(`http://universities.hipolabs.com/search?country=${e}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          
          setCountry(data);
        });
      }
      return(
        <div> 
          
                  <DropdownButton  className='DropdownButton'
                  title="Choose country"
                  id='dropdown-menu-align-right'
                  onSelect={handleSelect}
                  variant='info' >
                    
                    <Dropdown.Item eventKey='Georgia'>georgia</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item eventKey="Malaysia">Malaysia</Dropdown.Item>
                    <Dropdown.Divider/>
                   <Dropdown.Item eventKey='united states'>united states</Dropdown.Item>
                    <Dropdown.Divider/>
                   <Dropdown.Item eventKey="Mexico">Mexico</Dropdown.Item>

                  </DropdownButton>
                  
               <div  >{Slice.map((L,index)=>(<div className='list' key={index}> {L.name}</div>))}</div>   

        </div>
      )
}


export default App

