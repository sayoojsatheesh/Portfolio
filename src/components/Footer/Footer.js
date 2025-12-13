import classes from "./Footer.module.css";

// MUI Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className={classes.footer}>
      <p className={classes.text}>© {year} All rights reserved.</p>

      <div className={classes.socials}>
        <a
          href="https://github.com/sayoojsatheesh"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.iconWrapper}
        >
          <GitHubIcon fontSize="large" className={classes.icon} />
        </a>

        <a
          href="https://www.linkedin.com/in/sayooj-satheesh-44ba2a235/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.iconWrapper}
        >
          <LinkedInIcon fontSize="large" className={classes.icon} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
