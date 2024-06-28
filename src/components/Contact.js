import React, { useState } from "react";
import linkedin from "../assets/linkedin.png";
import email from "../assets/email.png";
import useTheme from "../context/Porto_Context";
import emailjs from "@emailjs/browser";
// Contact Component
const Contact = () => {
  const { darkMode } = useTheme();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: "",
    type: "",
  });

  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });
    setTimeout(() => {
      setAlertInfo({ display: false, message: "", type: "" });
    }, 5000);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = e.target.elements;

    try {
      setDisabled(true);
      const templateParams = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
      };

      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_PUBLIC_KEY
      );

      toggleAlert("Form submission was successful!", "success");
    } catch (e) {
      console.error(e);
      console.log(process.env.REACT_APP_SERVICE_ID);
      console.log(process.env.REACT_APP_TEMPLATE_ID);
      console.log(process.env.REACT_APP_PUBLIC_KEY);
      toggleAlert("Uh oh. Something went wrong.", "danger");
    } finally {
      setDisabled(false);
      e.target.reset();
    }
  };

  return (
    <section id="contact" className={darkMode ? "dark-mode" : ""}>
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-form-container">
        {alertInfo.display && (
          <div
            className={`alert alert-${alertInfo.type} alert-dismissible mt-5`}
            role="alert"
          >
            {alertInfo.message}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={() =>
                setAlertInfo({ display: false, message: "", type: "" })
              }
            ></button>
          </div>
        )}
        <form className="contact-form" onSubmit={onSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" disabled={disabled} className="btn btn-color-2">
            Send Message
          </button>
        </form>
      </div>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src={email}
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:sadamrohith456@gmail.com">
              sadamrohith456@gmail.com
            </a>
          </p>
        </div>
        <div className="contact-info-container">
          <img src={linkedin} alt="LinkedIn" className="icon contact-icon" />
          <p>
            <a
              href="https://www.linkedin.com/in/sadamrohith-45/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
