import React from "react";
import aboutpic from "../assets/about.png";
import experience from "../assets/experience.png";
import education from "../assets/education.png";
import arrow from "../assets/arrow.png";
import useTheme from "../context/Porto_Context";

const About = () => {
  const { darkMode } = useTheme();
  return (
    <section id="about" className={darkMode ? "dark-mode" : ""}>
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img src={aboutpic} alt="Profile" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src={experience} alt="Experience icon" className="icon" />
              <h3>Experience</h3>
              <ul className="experience-list">
                <li>
                  <strong>Datastage Developer</strong>
                  <br />
                  Advance Auto Parts, India
                  <br />3 months
                </li>
                <li>
                  <strong>
                    Website Developer and Information Systems Designer
                  </strong>
                  <br />
                  ScholarshipAuditions.com, Tennessee
                  <br />2 months
                </li>
              </ul>
            </div>
            <div className="details-container">
              <img src={education} alt="Education icon" className="icon" />
              <h3>Education</h3>
              <ul className="education-list">
                <li>
                  <strong>M.Sc. Computer Science</strong>
                  <br />
                  University Of Florida, Florida
                  <br />
                  2023 - 2025
                </li>
                <li>
                  <strong>B-Tech. Computer Science</strong>
                  <br />
                  VNR Vignana Jyothi, India
                  <br />
                  2019 - 2023
                </li>
              </ul>
            </div>
          </div>
          <div className="text-container">
            <p>
             I am a passionate Computer Science master's student at the
              University of Florida, I've had the opportunity to work on diverse
              projects that have honed my skills in React, JavaScript, Java,
              SpringBoot and responsive web design. My educational background in
              Computer Science and Software Engineering has provided me with a
              strong foundation in algorithmic thinking and software development
              principles. I'm constantly eager to learn new technologies and
              apply them to create innovative, user-friendly web applications.
            </p>
          </div>
        </div>
      </div>
      <img
        src={arrow}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "./#experience")}
      />
      <style jsx="true">{`
        .experience-list,
        .education-list {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
        .experience-list li,
        .education-list li {
          margin-bottom: 1rem;
        }
      `}</style>
    </section>
  );
};

export default About;
