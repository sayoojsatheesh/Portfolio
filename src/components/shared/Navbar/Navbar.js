// CSS
import classes from "./Navbar.module.css";
// MUI
import { useTheme, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// Libraries
import { Link } from "react-scroll";
import { useEffect, useState } from "react";

const Navbar = ({ toggleDrawer }) => {
  const theme = useTheme();
  const showDesktopMenu = useMediaQuery(theme.breakpoints.up("sm"));

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${classes.NavbarMainContainer} ${
        scrolled ? classes.scrolled : ""
      }`}
    >
      <div className={classes.NavbarLeftSide}>
        <Link to="intro" smooth={true} offset={-70} duration={500}>
          <span className={classes.logo}>Sayooj Satheesh</span>
        </Link>
      </div>

      {/* Desktop Menu */}
      {showDesktopMenu ? (
        <ul className={classes.NavItems}>
          <li>
            <Link to="intro" smooth={true} offset={-70} duration={500}>
              HOME
            </Link>
          </li>

          <li>
            <Link to="about" smooth={true} offset={-70} duration={500}>
              ABOUT
            </Link>
          </li>

          <li>
            <Link to="project" smooth={true} offset={-70} duration={500}>
              PROJECTS
            </Link>
          </li>

          <li>
            <Link to="contact" smooth={true} offset={-70} duration={500}>
              CONTACT
            </Link>
          </li>
        </ul>
      ) : (
        <MenuIcon
          fontSize="large"
          onClick={toggleDrawer}
          className={classes.menuIcon}
        />
      )}
    </nav>
  );
};

export default Navbar;
