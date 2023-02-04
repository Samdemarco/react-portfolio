import React from 'react';
import "../styles/About.css";
import profileImage from '../../assets/profile.png';


export default function About() {
  return (
      <div className="about">
      <img src={profileImage} alt="profile_picture" style={{ width: "200px", height: "200px" }}/>
      <h2>Hello, I'm Sam</h2>
      <div className="prompt">
      <p>I am an electrical engineer with over 16 years of work experience consisting of mutliple disciplines and skills! 
        My experience ranges from coding digital telecom circuits in verilog to selling IoT solutions to customers across the globe.
         For my latest adventure I've enrolled into a 6 month intensive FullStack development program which has been an amazing journey! 
         I love to code and obssesed with tech. 
      </p>
      </div>     
    </div>
  );
}


