// React //
import { Fragment } from "react";
// Custom //
import IntroSection from "../components/IntroSection/IntroSection";
import About from "../components/About/About";
import ProjectSection from "../components/ProjectsSection/ProjectSection";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <IntroSection />
      <About />
      <ProjectSection />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default Home;
