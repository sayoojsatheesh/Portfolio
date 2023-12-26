// MUI //
import { Drawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// CSS //
import classes from "./Sidebar.module.css";
// Libaries //
import { Link } from "react-scroll";

const Sidebar = ({ sideBarOpen, toggleDrawer }) => {
  return (
    <Drawer
      open={sideBarOpen}
      onClose={toggleDrawer}
      transitionDuration={{
        enter: 500,
        exit: 500,
      }}
    >
      <div className={classes.sidebarMainContainer}>
        <div className={classes.topSide}>
          <CloseIcon fontSize="large" onClick={toggleDrawer} />
        </div>
        <div className={classes.bottomSide}>
          <Link to="intro" spy={true} smooth={true} offset={-75} duration={500}>
            <h3 onClick={toggleDrawer}>HOME</h3>
          </Link>
          <Link to="about" spy={true} smooth={true} offset={-1} duration={500}>
            <h3 onClick={toggleDrawer}>About</h3>
          </Link>
          <Link
            to="project"
            spy={true}
            smooth={true}
            offset={-1}
            duration={500}
          >
            <h3 onClick={toggleDrawer}>Projects</h3>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-1}
            duration={500}
          >
            <h3 onClick={toggleDrawer}>Contact</h3>
          </Link>
        </div>
      </div>
    </Drawer>
  );
};

export default Sidebar;
