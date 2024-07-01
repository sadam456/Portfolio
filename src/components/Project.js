import React from "react";
import project1 from "../assets/project-1.png";
import personalblog from "../assets/PersonalBlog.jpeg";
import foodDelivery from "../assets/FoodDelivery.jpeg";
import arrow from "../assets/arrow.png";
import useTheme from "../context/Porto_Context";

// Projects Component
const Projects = () => {
  const { darkMode } = useTheme();
  return (
    <section id="projects" className={darkMode ? "dark-mode" : ""}>
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {/* Repeat this div for each project */}
          <div className="details-container color-container">
            <div className="article-container">
              <img src={personalblog} alt="Project 1" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">Project One</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.open("https://github.com/sadam456/PersonalBlog_FrontEnd", "_blank", "noopener,noreferrer")}  
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                 onClick={() => window.open("https://nimble-rugelach-59df20.netlify.app/", "_blank", "noopener,noreferrer")} 
              >
                Live Demo
              </button>
            </div>
          </div>
          {/* Add more projects here */}
          <div className="details-container color-container">
            <div className="article-container">
              <img src={foodDelivery} alt="Project 1" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">Project One</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.open("https://github.com/sadam456/FoodDeliveryApp", "_blank", "noopener,noreferrer")}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                 onClick={() => window.open("https://sadam456.github.io/FoodDeliveryApp/", "_blank", "noopener,noreferrer")} 
              >
                Live Demo
              </button>
            </div>
          </div>
          {/* Add more projects here */}
          <div className="details-container color-container">
            <div className="article-container">
              <img src={project1} alt="Project 1" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">Project One</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => (window.location.href = "https://github.com/")}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => (window.location.href = "https://github.com/")}
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src={arrow}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "./#contact")}
      />
    </section>
  );
};
export default Projects;
