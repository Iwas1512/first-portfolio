import { Link } from "react-router-dom";
import "./NavbarStyles.css";


import React, {useState} from "react";


import { FaBars, FaTimes, FaGithub, FaLinkedin} from "react-icons/fa";






const Navbar = () => {
    const [click, setClick] = useState(false); 
    const handleClick = () => setClick(!click);


    const [color, setColor] = useState("false");

    const changeColor = () => {
        if(window.scrollY >= 100){
            setColor(true);
        }
        else
        {
            setColor(false);
        }
    }
    window.addEventListener("scroll", changeColor);
    







  return (
   < div className={color? "header header-bg": "header"}>
    <Link to = {"/"}>
    <h1> Portfolio  </h1>

     </Link>
     <ul className = {click? "nav-menu active" : "nav-menu"}> 
        <li>
            <Link to = "/">Home</Link>
        </li>
        <li>
            <Link to = "/projects">Projects</Link>
        </li>
        <li>
            <Link to = "/about">About</Link>
        </li>
        <li>
            <Link to = "/contact">Contact</Link>
        </li>
    


     </ul>


     <div className="social-icons">
                <a href="https://github.com/Iwas1512" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} style={{ color: "#fff", marginRight: "1rem" }} />
                </a>
                <a href="https://www.linkedin.com/in/anlil-iwas-b7aa892a9" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={24} style={{ color: "#fff" }} />      
                </a>

              
               
            </div> 

     <div className = "hamburger" onClick = {handleClick}> 
        {click? <FaTimes size={20} style={{color:"fff"}} /> : (<FaBars size={20} style={{color:"fff"}} />)}
        
        
     </div>

    </div>
  )
}

export default Navbar