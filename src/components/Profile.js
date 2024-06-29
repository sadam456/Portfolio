import React from "react";
import linkedin from "../assets/linkedin.png";
import Github from "../assets/github.png";
import Profilepic from "../assets/profile.png";
import useTheme from "../context/Porto_Context";
import resume from "../assets/resume.pdf";


// Profile Component
const Profile = () => {
  const { darkMode } = useTheme();
    const openPdfInNewTab = () => {
    window.open(resume, "_blank", "noopener,noreferrer");
  };
  return (
    <section id="profile" className={darkMode ? "dark-mode" : ""}>
      <div className="section__pic-container">
        <img src={Profilepic} alt="John Doe profile" />
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
            onClick={() => (window.location.href = "https://www.linkedin.com/in/sadamrohith-45/")}
          />
          <img
            src={Github}
            alt="My Github profile"
            className="icon"
            onClick={() => (window.location.href = "https://github.com/sadam456")}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
