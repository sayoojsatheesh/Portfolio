import classes from "./Navbar.module.css";
import { useTheme, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import { SCROLL_DURATION, SCROLL_OFFSET } from "../../../constants/layout";

const navLinks = [
  { to: "intro", label: "Home" },
  { to: "about", label: "About" },
  // { to: "project", label: "Projects" },
  { to: "contact", label: "Contact" },
];

const Navbar = ({ toggleDrawer }) => {
  const theme = useTheme();
  const showDesktopMenu = useMediaQuery(theme.breakpoints.up("sm"));
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkProps = {
    spy: true,
    smooth: true,
    offset: SCROLL_OFFSET,
    duration: SCROLL_DURATION,
  };

  return (
    <nav
      className={`${classes.navbar} ${scrolled ? classes.scrolled : ""}`}
      aria-label="Main navigation"
    >
      <Link to="intro" {...linkProps} className={classes.logoLink}>
        <span className={classes.logo}>Sayooj</span>
      </Link>

      {showDesktopMenu ? (
        <ul className={classes.navItems}>
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                {...linkProps}
                activeClass={classes.active}
                className={classes.navLink}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <button
          type="button"
          className={classes.menuButton}
          onClick={toggleDrawer}
          aria-label="Open menu"
        >
          <MenuIcon fontSize="medium" />
        </button>
      )}
    </nav>
  );
};

export default Navbar;
