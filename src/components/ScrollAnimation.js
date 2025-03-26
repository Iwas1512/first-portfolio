// Add this to a new file called ScrollAnimation.js
import { useEffect } from 'react';

const ScrollAnimation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const textBox = document.querySelector('.text-box');
      if (!textBox) return;
      
      const textBoxPosition = textBox.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (textBoxPosition < screenPosition) {
        textBox.style.opacity = '1';
        textBox.style.transform = 'translateY(0)';
      }
    };

    // Initial check in case the element is already in view
    setTimeout(handleScroll, 100);
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return null; // This component doesn't render anything
};

export default ScrollAnimation;