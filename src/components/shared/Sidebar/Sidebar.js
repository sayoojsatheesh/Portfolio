// MUI //
import { Drawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// CSS //
import classes from "./Sidebar.module.css";

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
          <h3>HOME</h3>
          <h3>About</h3>
          <h3>Projects</h3>
        </div>
      </div>
    </Drawer>
  );
};

export default Sidebar;
