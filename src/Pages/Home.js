// React //
import { Fragment } from "react";
// Custom //
import IntroSection from "../components/IntroSection/IntroSection";
import About from "../components/About/About";
import ProjectSection from "../components/ProjectsSection/ProjectSection";
import Contact from "../components/Contact/Contact";

const Home = () => {
  return (
    <Fragment>
      <IntroSection />
      <About />
      <ProjectSection />
      <Contact />
    </Fragment>
  );
};

export default Home;
