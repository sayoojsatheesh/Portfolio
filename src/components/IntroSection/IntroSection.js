// CSS
import classes from "./IntroSection.module.css";
// Other
import Typewriter from "typewriter-effect";
// Custom
import LeftSideStickyBar from "../shared/LeftSideStickyBar/LeftSideStickyBar";
// MUI
import { useTheme, useMediaQuery } from "@mui/material";
// Libaries
import { Link } from "react-scroll";
const IntroSection = () => {
  const theme = useTheme();
  const showSidebar = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <section id="intro" className={classes.introMainContainer}>
      {showSidebar && <LeftSideStickyBar />}

      <div className={classes.heroContent}>
        <h4 className={classes.greeting}>
          Hello <span className={classes.wave}>👋</span>
        </h4>

        <h1 className={classes.name}>
          I'm <span className={classes.highlight}>Sayooj Satheesh</span>
        </h1>

        <div className={classes.typeWriterText}>
          <Typewriter
            options={{
              strings: [
                "Frontend Developer",
                "React Specialist",
                "Backend Developer",
                "Problem Solver",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <p className={classes.subtitle}>
          I build fast, scalable and user-focused web applications.
        </p>

        <div className={classes.ctaContainer}>
          <Link
            to="project"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={classes.primaryButton}
          >
            View My Work
          </Link>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={classes.secondaryButton}
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
