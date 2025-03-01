import "./HeroImgStyles.css";
import React from 'react'

import AvatarImg from "../assets/goat.jpg";

import IntroImg from "../assets/cooler.jpg";
import { Link } from "react-router-dom";








const HeroImg = () => {
  return (
    <div className = "hero">
        <div className = "mask">
            <img className = "intro-img" src = {IntroImg} alt = {IntroImg} />
            
        
        




        </div>

        <div className = "content"> 
            <img className="avatar" src = {AvatarImg} alt = {AvatarImg} />
            <p> Full Stack Software Engineer</p>
            <h1> Computer Science Undergrad @UIC </h1>

            <div>
                <Link to = "/projects" className="btn">Projects </Link>
                <Link to = "/review" className="btn btn-secondary">Reviews </Link>
               
            </div>


        </div>


    </div>
  )
}

export default HeroImg

