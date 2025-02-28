import "./HeroImgStyles.css";
import React from 'react'

import IntroImg from "../assets/cooler.jpg";
import { Link } from "react-router-dom";







const HeroImg = () => {
  return (
    <div className = "hero">
        <div className = "mask">
            <img className = "into-img" src = {IntroImg} alt = {IntroImg} />
            
        
        




        </div>

        <div className = "content"> 
            <p> Full Stack Software Engineer</p>
            <h1> Computer Science Undergrad|@ UIC </h1>

            <div>
                <Link to = "/projects" className="btn">Projects </Link>
                <Link to = "/contact" className="btn btn-secondary">Contact </Link>
               
            </div>


        </div>


    </div>
  )
}

export default HeroImg

