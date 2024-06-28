import React from "react";
import checkmark from "../assets/checkmark.png";
import useTheme from "../context/Porto_Context";

import arrow from "../assets/arrow.png";

// Experience Component
const Experience = () => {
  const { darkMode } = useTheme();
  return (
    <section id="experience" className={darkMode ? "dark-mode" : ""}>
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Skills</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <div className="article-container">
              {/* Repeat this article for each skill */}
              <article>
                <img src={checkmark} alt="Experience" className="icon" />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              {/* Add more skills here */}
              <article>
                <img src={checkmark} alt="Experience" className="icon" />
                <div>
                  <h3>CSS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              {/* Add more skills here */}
              <article>
                <img src={checkmark} alt="Experience" className="icon" />
                <div>
                  <h3>JAVASCRIPT</h3>
                  <p>Experienced</p>
                </div>
              </article>
              {/* Add more skills here */}
              <article>
                <img src={checkmark} alt="Experience" className="icon" />
                <div>
                  <h3>REACT</h3>
                  <p>Experienced</p>
                </div>
              </article>
              {/* Add more skills here */}
              <article>
                <img src={checkmark} alt="Experience" className="icon" />
                <div>
                  <h3>NODE.JS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              {/* Add more skills here */}
              <article>
                <img src={checkmark} alt="Experience" className="icon" />
                <div>
                  <h3>C/C++</h3>
                  <p>Experienced</p>
                </div>
              </article>
              {/* Add more skills here */}
              <article>
                <img src={checkmark} alt="Experience" className="icon" />
                <div>
                  <h3>JAVA</h3>
                  <p>Experienced</p>
                </div>
              </article>
              {/* Add more skills here */}
              <article>
                <img src={checkmark} alt="Experience" className="icon" />
                <div>
                  <h3>SPRING BOOT</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              {/* Add more skills here */}
              <article>
                <img src={checkmark} alt="Experience" className="icon" />
                <div>
                  <h3>SQL</h3>
                  <p>Experienced</p>
                </div>
              </article>
              {/* Add more skills here */}
              <article>
                <img src={checkmark} alt="Experience" className="icon" />
                <div>
                  <h3>DATABASES</h3>
                  <p>Experienced</p>
                </div>
              </article>
              {/* Add more skills here */}
              <article>
                <img src={checkmark} alt="Experience" className="icon" />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              {/* Add more skills here */}
              <article>
                <img src={checkmark} alt="Experience" className="icon" />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
            </div>
          </div>
          {/* Add backend development container here */}
        </div>
      </div>
      <img
        src={arrow}
        alt="Arrow"
        className="icon arrow"
        onClick={() => (window.location.href = "./#projects")}
      />
    </section>
  );
};

export default Experience;
