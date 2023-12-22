// React //
import { Fragment } from "react";
// Custom //
import IntroSection from "../components/IntroSection/IntroSection";
import About from "../components/About/About";
import ProjectSection from "../components/ProjectsSection/ProjectSection";

const Home = () => {
  return (
    <Fragment>
      <IntroSection />
      <About />
      <ProjectSection/>
    </Fragment>
  );
};

export default Home;
