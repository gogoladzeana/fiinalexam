import { useEffect, useState } from "react"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";


const HomePage =()=>{
    const [title,setTitle]=useState([{}])
    const [country,setCountry]=useState('')
  
  const university =(event)=>{
    if(event.key == "Enter"){
      fetch(`http://universities.hipolabs.com/search?country=${country}`).then ( response => response.json())
      .then (
        data =>{ setTitle(data)
          console.log(data)
        setCountry("")
      }
      )
    }
  }
    return(
        <div>
          <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                autoSlide={true}
            >
                <SwiperSlide>
                <img
                        className="object-fill  w-full h-[530px]"
                        src="https://www.ilwindia.com/wp-content/uploads/2019/06/UK_Courses_for_Indian_Students_ILW_Education_Consultants.jpg"
                        alt="image slide 2"
                    />
                    
                </SwiperSlide>
                <SwiperSlide>
                <img
                        className="object-fill w-full h-[530px]" 
                        src="https://www.trinity.utoronto.ca/wp-content/uploads/2019/08/Front-entrance-to-Trinity-College-with-pink-crabapple-blossoms-1.jpg"
                      
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill  w-full h-[530px]"
                        src="https://assets.weforum.org/article/image/large_d3n5oNcjmYDLnnEeLfmcVeD3dfl8kt9-RbviUoYnvHE.jpg"
                        alt="image slide 3"
                    />
                </SwiperSlide>
            </Swiper>
             
          <h2 className="homeh2" >Type the desired country and press Enter</h2>
          <h3  className="homeh2">For example  (  Georgia ,  United states  ,  India  ,    Canada ...)</h3>
          <h2 className="homeh2" >Scroll down and click on the desired university </h2>

             <input 
             
                  placeholder='Enter the desired country...'
                  onChange={(e)=>setCountry(e.target.value)}
                  value={country}
                  onKeyPress={university}></input>

          <h1 className="H1">University</h1>
          <div className="homeLi">  {title.map ( title => ( <div className="Homediv"> <a href={title.web_pages} target='_blank'>{title.name}</a>  </div>))}  </div> 
          
                  </div>
    )
} 
export default HomePage
