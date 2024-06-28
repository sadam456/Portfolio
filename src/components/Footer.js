import useTheme from "../context/Porto_Context";

const Footer = () => {
  const { darkMode } = useTheme();
  return (
    <footer className={darkMode ? "dark-mode" : ""}>
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <p>Copyright &#169; 2023 John Doe. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
