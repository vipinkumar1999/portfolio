import Masthead from "./components/Masthead";
import Summary from "./components/Summary";
import Experience from "./components/Experience";
import Capabilities from "./components/Capabilities";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => (
  <>
    <a className="skip-link" href="#main">
      Skip to content
    </a>
    <Masthead />
    <main id="main" tabIndex={-1}>
      <Summary />
      <Experience />
      <Capabilities />
      <Skills />
      <Education />
      <Contact />
    </main>
    <Footer />
  </>
);

export default App;
