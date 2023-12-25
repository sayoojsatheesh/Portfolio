// CSS //
import classes from "./Footer.module.css";
// MUI //
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div id="footer" className={classes.footerMainContainer}>
      <h3 style={{ textAlign: "center" }}>
        Copyright © 2023. All rights are reserved
      </h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <a
          href={"https://github.com/sayoojsatheesh"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon fontSize="large" className={classes.Icons} />
        </a>
        <a
          href={"https://www.linkedin.com/in/sayooj-satheesh-44ba2a235/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon fontSize="large" className={classes.Icons} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
