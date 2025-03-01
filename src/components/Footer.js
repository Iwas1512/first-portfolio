import "./FooterStyles.css"

import React from 'react'

import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className = "footer">
        <div className="footer-container">
            <div className = "left">
                <div className= "home">
                    
                <p><FaHome size = {20} style = {{color: "#fff", marginRight: "2rem"}} />
                 Chicago, Illinois, USA  </p>
                
                

                </div>

                <div className="phone"> 
                    <h4> <FaPhone size = {20} style = {{color: "#fff", marginRight: "2rem"}}/>
                    +1(224)-605-8635 </h4>
                    
                     </div>

                     <div className="email"> 
                    <h4> <FaMailBulk size = {20} style = {{color: "#fff", marginRight: "2rem"}}/>
                    anliliwas1@gmail.com </h4>
                    
                     </div>
            
             </div>

            <div className = "right"> 
                 <h4> Quick About Me </h4>
                 <p> My name is Anlil Iwas, a Software Engineer currently based in the Greater Chicago Area. I love building and devloping.  
                     </p>
                    <div className="socials">
                    <FaLinkedin size = {30} style = {{color: "#fff", marginRight: "1rem"}}/>
                    <FaGithub size = {30} style = {{color: "#fff", marginRight: "1rem"}}/>
                         

                    </div>
            </div>
        </div>


        
    </div>
  )
}

export default Footer