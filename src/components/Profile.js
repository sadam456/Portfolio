import React from "react";
import { useState, useEffect } from "react";
import linkedin from "../assets/linkedin.png";
import Github from "../assets/github.png";
import Profilepic from "../assets/profile.png";
import useTheme from "../context/Porto_Context";
import resume from "../assets/Resume.pdf";


// Profile Component
const Profile = () => {
  const { darkMode } = useTheme();
  const [yOffset, setYOffset] = useState(0);
  
    const openPdfInNewTab = () => {
    window.open(resume, "_blank", "noopener,noreferrer");
  };

   useEffect(() => {
    const floatAnimation = () => {
      const time = new Date().getTime() / 1000;
      const newOffset = Math.sin(time) * 10; // Adjust 10 to change float height
      setYOffset(newOffset);
    };

    const animationFrame = requestAnimationFrame(function animate() {
      floatAnimation();
      requestAnimationFrame(animate);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, []);
  
  return (
    <section id="profile" className={darkMode ? "dark-mode" : ""}>
      <div className="section__pic-container">
        <div
          className="seamless-image-container"
          style={{
            transform: `translateY(${yOffset}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <img
            src={Profilepic}
            alt="John Doe profile"
            className="seamless-image"
          />
        </div>
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Rohith Sadam</h1>
        <p className="section__text__p2">Student</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={openPdfInNewTab}
          >
            Download CV
          </button>
          <button
            className="btn btn-color-1"
            onClick={() => (window.location.href = "./#contact")}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={linkedin}
            alt="My LinkedIn profile"
            className="icon"
           onClick={() => window.open("https://www.linkedin.com/in/sadamrohith-45/", "_blank", "noopener,noreferrer")}
          />
          <img
            src={Github}
            alt="My Github profile"
            className="icon"
            onClick={() => window.open("https://github.com/sadam456", "_blank", "noopener,noreferrer")}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
