import classes from "./Footer.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const socialLinks = [
  {
    href: "https://github.com/sayoojsatheesh",
    label: "GitHub",
    icon: GitHubIcon,
  },
  {
    href: "https://www.linkedin.com/in/sayooj-satheesh-44ba2a235/",
    label: "LinkedIn",
    icon: LinkedInIcon,
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className={classes.footer}>
      <p className={classes.text}>
        © {year} Sayooj Satheesh. All rights reserved.
      </p>

      <div className={classes.socials}>
        {socialLinks.map(({ href, label, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.socialLink}
            aria-label={label}
          >
            <Icon fontSize="small" />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
