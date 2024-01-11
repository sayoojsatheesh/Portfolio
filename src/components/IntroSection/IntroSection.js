// CSS //
import classes from "./IntroSection.module.css";
// Other //
import Typewriter from "typewriter-effect";
// Custom //
import DownloadResume from "../DownloadResume/DownloadResume";
import LeftSideStickyBar from "../shared/LeftSideStickyBar/LeftSideStickyBar";
// MUI //
import { useTheme, useMediaQuery } from "@mui/material";

const IntroSection = () => {
  const theme = useTheme();
  const dontShowMenuIcon = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <div id="intro" className={classes.introMainContainer}>
      <div className={classes.mainHeadingContainer}>
        <h4 style={{ fontSize: "2rem" }}>
          Hello <span className={classes.wave}>👋</span>
        </h4>
        <h1 style={{ fontSize: "4rem" }}>
          I'M <span style={{ color: "#7843e9" }}>S</span>AYOOJ{" "}
          <span style={{ color: "#7843e9" }}>S</span>ATHEESH
        </h1>
        <div style={{ fontSize: "3rem" }} className={classes.typeWriter}>
          <Typewriter
            options={{
              strings: [
                "Front-End Developer",
                "Back-End Developer",
                "Problem Solver",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      
      </div>
      {dontShowMenuIcon ? <LeftSideStickyBar /> : null}
    </div>
  );
};

export default IntroSection;
