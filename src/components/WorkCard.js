import "./WorkCardStyles.css";
import React from 'react';
import { NavLink } from 'react-router-dom';

// Import your tech icons - use the same imports as your About page
import javaIcon from '../assets/java-logo.png';
import csharp from '../assets/C_Sharp_Logo_2023.svg.png';
import Cplus from '../assets/6132222.png';
import Js from '../assets/jsicon.webp';
import python from '../assets/267_Python-512.webp';
import reacticon from '../assets/reactbetter.webp';
import htmlicon from '../assets/betterhtml.webp';
import cssicon from '../assets/csslogo.webp';
import nodeicon from '../assets/nodejs-icon-2048x2048-rueyo8fw.png';
import springBoot from '../assets/spring-boot-logo.png';
import mySqllogo from '../assets/mysql logo.png';
import MongoDB from '../assets/mongodb.jpg';
import Firebase from '../assets/firebase.jpg';
import tailwind from '../assets/tailwind.jpg';
import vite from '../assets/vitejs.jpg';
import gemini from '../assets/gemini.jpg';
import googleapi from '../assets/googleapi.png';
import spigot from '../assets/spidgot.jpg'
import bukkit from '../assets/bukkit.jpg'
import ReactNativeLogo from '../assets/react-native.png';
import Typescript from '../assets/typescriptlogo.jpg';
import Aws from '../assets/Amazon_Web_Services_Logo.svg.png';
import postSQL from '../assets/postglogo.png';
import lintIcon from '../assets/lint.png';
import axiosIcon from '../assets/axios.png';
import githubIcon from '../assets/github.png';
import gitIcon from '../assets/git.png';
import sequelizeIcon from '../assets/seq.png';
import railwayIcon from '../assets/railway.svg';
import vercelIcon from '../assets/Vercel_favicon.svg';
import postmanIcon from '../assets/postman.png';
import nextjsIcon from '../assets/nextjs.png';
import jwtIcon from '../assets/jwt.png';

const WorkCard = (props) => {
  // Function to get the icon based on technology name
  const getTechIcon = (tech) => {
    const techIcons = {
      Java: javaIcon,
      'C#': csharp,
      'C++': Cplus,
      JavaScript: Js,
      Python: python,
      React: reacticon,
      HTML: htmlicon,
      CSS: cssicon,
      Node: nodeicon,
      SpringBoot: springBoot,
      MySQL: mySqllogo,
      MongoDB : MongoDB,
      Firebase : Firebase,
      tailwindCSS : tailwind,
      Vite : vite,
      GoogleAPI : googleapi,
      GeminiAPI : gemini,
      Spigot : spigot,
      Bukkit : bukkit,
      ReactNative: ReactNativeLogo,
      TypeScript: Typescript,
      AWS: Aws,
      PostgreSQL: postSQL,
      ESLint: lintIcon,
      Axios: axiosIcon,
      GitHub: githubIcon,
      Git: gitIcon,
      Sequelize: sequelizeIcon,
      Railway: railwayIcon,
      Vercel: vercelIcon,
      Postman: postmanIcon,
      'Next.js': nextjsIcon,
      JWT: jwtIcon,
    

    };
    
    return techIcons[tech] || null;
  };

  return (
    <div className="project-card">
      <h2 className="project-title" dangerouslySetInnerHTML={{ __html: props.title }}></h2>
      
      {/* Add tech icons below the title */}
      <div className="tech-tags">
        {props.technologies && props.technologies.map((tech, index) => (
          <span 
            key={index} 
            className="tech-tag"
          >
            <img src={getTechIcon(tech)} alt={tech} className="tech-icon" />
            {tech}
          </span>
        ))}
      </div>
      
      <img src={props.imgsrc} alt="project" className="project-img"/>
      <div className="pro-details">
        <p dangerouslySetInnerHTML={{ __html: props.text }}></p>
        <div className="pro-btns">
          <NavLink to={props.view} className="btn">View-Video Showcase</NavLink>
          <NavLink to={props.source} className="btn">Source</NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;