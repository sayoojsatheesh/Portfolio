// CSS //
import classes from "./Navbar.module.css";
// MUI //
import { useTheme, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// Libaries //
import { Link } from "react-scroll";

const Navbar = ({ toggleDrawer }) => {
  const theme = useTheme();
  const dontShowMenuIcon = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div className={classes.NavbarMainContainer}>
      <div className={classes.NavbarLeftSide}>
        <Link to="intro" spy={true} smooth={true} offset={-75} duration={500}>
          <span>Sayooj Satheesh</span>
        </Link>
      </div>
      <div>
        {dontShowMenuIcon ? (
          <div>
            <ul>
              <Link
                to="intro"
                spy={true}
                smooth={true}
                offset={-75}
                duration={500}
              >
                <li>HOME</li>
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-1}
                duration={500}
              >
                <li>ABOUT</li>
              </Link>
              <Link
                to="project"
                spy={true}
                smooth={true}
                offset={-1}
                duration={500}
              >
                <li>PROJECTS</li>
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-1}
                duration={500}
              >
                <li>CONTACT</li>
              </Link>
            </ul>
          </div>
        ) : (
          <MenuIcon fontSize="large" onClick={toggleDrawer} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
