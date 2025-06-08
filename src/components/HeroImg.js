import "./HeroImgStyles.css";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import AvatarImg from "../assets/goat.jpg";
import IntroImg from "../assets/cooler.jpg";

const HeroImg = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = 'Software Engineer';
  
  // Create typing effect
  useEffect(() => {
    if (isTyping) {
      if (text.length < fullText.length) {
        const timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
        const timeout = setTimeout(() => {
          setIsTyping(true);
          setText('');
        }, 3000);
        return () => clearTimeout(timeout);
      }
    }
  }, [text, isTyping]);
  
  // Create particles
  useEffect(() => {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;
    
    // Clear any existing particles
    particlesContainer.innerHTML = '';
    
    // Create new particles
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random starting positions
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;
      
      // Random sizes
      const size = Math.random() * 2 + 1;
      
      // Random animation duration
      const duration = Math.random() * 10 + 10;
      
      // Set styles
      particle.style.left = `${startX}px`;
      particle.style.top = `${startY}px`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.opacity = Math.random() * 0.5 + 0.3;
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      
      particlesContainer.appendChild(particle);
    }
  }, []);

  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="Background" />
        <div className="particles"></div>
      </div>
      
      <div className="content">
        <div className="avatar-container">
          <img className="avatar" src={AvatarImg} alt="Anlil Iwas" />
          <div className="algozero-sticky-note">
            Checkout <a href="https://algozero.xyz" target="_blank" rel="noopener noreferrer" style={{color: '#000', textDecoration: 'underline'}}>algozero.xyz</a>
          </div>
        </div>
        <p>ANLIL IWAS</p>
        <h1 className="typed-text">{text}</h1>
        <div>
          <Link to="/projects" className="btn">PROJECTS</Link>
          <Link to="/contact" className="btn btn-secondary">CONTACT ME</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;