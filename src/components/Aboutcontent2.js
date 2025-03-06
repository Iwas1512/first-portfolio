import "./Aboutcontent2Styles.css";
import React from 'react';
import meowmeow from '../assets/mechillen.jpeg';
import meowmeow2 from '../assets/myloveandi.jpeg';
import meowmeow3 from '../assets/meowmeowthegoat.jpg';

const Aboutcontent2 = () => {
  return (
    <div className="about">
      <div className="gallery">
        <div className="gallery-item">
          <img src={meowmeow} className="gallery-img" alt="Friend 1" />
        </div>
        <div className="gallery-item">
          <img src={meowmeow2} className="gallery-img" alt="Friend 2" />
        </div>
        <div className="gallery-item">
          <img src={meowmeow3} className="gallery-img" alt="Friend 2" />
        </div>
      </div>
    </div>
  );
}

export default Aboutcontent2;