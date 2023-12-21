// CSS //
import classes from "./Navbar.module.css";
// MUI //
import { useTheme, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ toggleDrawer }) => {
  const theme = useTheme();
  const dontShowMenuIcon = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div className={classes.NavbarMainContainer}>
      <div className={classes.NavbarLeftSide}>
        <span>Sayooj Satheesh</span>
      </div>
      <div>
        {dontShowMenuIcon ? (
          <div>
            <ul>
              <li>HOME</li>
              <li>ABOUT</li>
              <li>PROJECTS</li>
              <li>CONTACT</li>
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
