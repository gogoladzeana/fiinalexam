import { useState } from "react"

const HomePage =()=>{
    const [title,setTitle]=useState([{}])
    const [country,setCountry]=useState('')
  
  const university =(event)=>{
    if(event.key == "Enter"){
      fetch(`http://universities.hipolabs.com/search?country=${country}`).then ( response => response.json())
      .then (
        data =>{ setTitle(data)
        setCountry("")
      }
      )
    }
  }
    
    return(
        <div>
          <h2 className="homeh2" >Enter the desired country and see the universities</h2>

             <input 
      placeholder='Enter the desired country...'
      onChange={(e)=>setCountry(e.target.value)}
      value={country}
      onKeyPress={university}></input>

<div className="homeLi"> University {title.map ( title => ( <div> {title.name} </div>))}  </div> 
        </div>
    )
} 
export default HomePage






















// import 'bootstrap/dist/css/bootstrap.min.css';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown'
// import { useState } from 'react';

// const App =()=>{
//   const [value,setValue]=useState('')
//   const [country,setCountry]=useState([])
//   const citrus = country.slice(0, 10);
//   const handleSelect=(e)=>{
//     setValue(e)
//   fetch(`http://universities.hipolabs.com/search?country=${e}`)
//         .then((response) => {
//           return response.json();
//         })
//         .then((data) => {
          
//           setCountry(data);
//         });
//       }
//       return(
//         <div>
//   <DropdownButton 
//   title="Choose country"
//   id='dropdown-menu-align-right'
//   onSelect={handleSelect} >
//     <Dropdown.Item eventKey='Georgia'>georgia</Dropdown.Item>
//     <Dropdown.Divider/>
//     <Dropdown.Item eventKey='Ukraine'>ukraine</Dropdown.Item>
//     <Dropdown.Divider/>
//         <Dropdown.Item eventKey='Italy'>Italy</Dropdown.Item>

//   </DropdownButton>
  
//   {citrus.map((L,index)=>(<div key={index}> {L.name}</div>))}

//         </div>
//       )
// }


// export default App
