import classes from "./IntroSection.module.css";
import Typewriter from "typewriter-effect";
import LeftSideStickyBar from "../shared/LeftSideStickyBar/LeftSideStickyBar";
import { useTheme, useMediaQuery } from "@mui/material";
import { Link } from "react-scroll";
import { SCROLL_DURATION, SCROLL_OFFSET } from "../../constants/layout";

const IntroSection = () => {
  const theme = useTheme();
  const showSidebar = useMediaQuery(theme.breakpoints.up("md"));

  const linkProps = {
    spy: true,
    smooth: true,
    offset: SCROLL_OFFSET,
    duration: SCROLL_DURATION,
  };

  return (
    <section id="intro" className={classes.introMainContainer}>
      {showSidebar && <LeftSideStickyBar />}

      <div className={classes.heroInner}>
        <p className={classes.eyebrow}>Hello, I&apos;m</p>

        <h1 className={classes.name}>Sayooj Satheesh</h1>

        <p className={classes.headline}>
          <span className={classes.headlinePrefix}>A </span>
          <span className={classes.typeWriterText}>
            <Typewriter
              options={{
                strings: [
                  "Full-Stack Developer",
                  "MERN Stack Engineer",
                  "React & Node.js Developer",
                  "API & Backend Specialist",
                  "TypeScript | JavaScript Engineer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 40,
                delay: 50,
              }}
            />
          </span>
        </p>

        <p className={classes.subtitle}>
          I build fast, scalable, and user-focused web applications — from
          polished interfaces to reliable backend systems.
        </p>

        <div className={classes.ctaContainer}>
          <Link to="project" {...linkProps} className={classes.primaryButton}>
            View My Work
          </Link>

          <Link to="contact" {...linkProps} className={classes.secondaryButton}>
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
