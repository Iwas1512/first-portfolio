import "./AboutcontentStyles.css";
import React from 'react';
import javaIcon from '../assets/java-logo.png';
import csharp from '../assets/C_Sharp_Logo_2023.svg.png';
import Cplus from '../assets/6132222.png';
import Js from '../assets/jsicon.webp';
import python from '../assets/267_Python-512.webp';
import reacticon from '../assets/reactbetter.webp';
import htmlicon from '../assets/betterhtml.webp';
import cssicon from '../assets/csslogo.webp';
import nodeicon from '../assets/nodejs-icon-2048x2048-rueyo8fw.png';
import springBoot from '../assets/spring-boot-logo.png'
import mySqllogo from '../assets/mysql logo.png';
import MongoDB from '../assets/mongodb.jpg';
import Firebase from '../assets/firebase.jpg';
import tailwind from '../assets/tailwind.jpg';
import vite from '../assets/vitejs.jpg';


import { Link } from "react-router-dom";
// Add more imports for other language icons as needed

const Aboutcontent = () => {
  return (
    
    <div className="about-content">
    




      <h2>What Do I Know?</h2>
      <div className="languages">
        <div className="language">
          <img src={javaIcon} alt="Java" className="language-icon" />
          <p>Java</p>
        </div>
        <div className="language">
          <img src={csharp} alt="csharp" className="language-icon" />
          <p>C#</p>
        </div>
        <div className="language">
          <img src={Cplus} alt="C" className="language-icon" />
          <p>C++</p>
        </div>

        <div className="language">
          <img src={Js} alt="js" className="language-icon" />
          <p>JavaScript</p>
        </div>
        
        <div className="language">
          <img src={htmlicon} alt="html" className="language-icon" />
          <p>HTML</p>
        </div>
        <div className="language">
          <img src={cssicon} alt="CSS" className="language-icon" />
          <p>CSS</p>
        </div>
        <div className="language">
          <img src={python} alt="python" className="language-icon" />
          <p>Python</p>
        </div>
        <div className="language">
          <img src={reacticon} alt="react" className="language-icon" />
          <p>React</p>
        </div>
        <div className="language">
          <img src={nodeicon} alt="node" className="language-icon" />
          <p>Node</p>
        </div>
        <div className="language">
          <img src={springBoot} alt="springboot" className="language-icon" />
          <p>SpringBoot</p>
        </div>
        <div className="language">
          <img src={mySqllogo} alt="sql" className="language-icon" />
          <p>MySQL</p>
        </div>

        <div className="language">
          <img src={MongoDB} alt="sql" className="language-icon" />
          <p>MongoDB</p>
        </div>
        <div className="language">
          <img src={Firebase} alt="sql" className="language-icon" />
          <p>Firebase</p>
        </div>
        <div className="language">
          <img src={tailwind} alt="sql" className="language-icon" />
          <p>tailwindCSS</p>
        </div>

        <div className="language">
          <img src={vite} alt="sql" className="language-icon" />
          <p>Vite</p>
        </div>






       
        {/* Add more languages as needed */}
      </div>
      <Link to = "/contact">
      <button className="btn">Contact Me</button></Link>
     
    </div>
  );
}

export default Aboutcontent;