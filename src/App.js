import "./style.css";
import "./mediaqueries.css";
import "./dark.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/Porto_Context";
import "./contact.css";
function App() {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <Profile />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
