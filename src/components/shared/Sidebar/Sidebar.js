import { Drawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import classes from "./Sidebar.module.css";
import { Link } from "react-scroll";
import { SCROLL_DURATION, SCROLL_OFFSET } from "../../../constants/layout";

const navLinks = [
  { to: "intro", label: "Home" },
  { to: "about", label: "About" },
  { to: "project", label: "Projects" },
  { to: "contact", label: "Contact" },
];

const Sidebar = ({ sideBarOpen, toggleDrawer }) => {
  const linkProps = {
    spy: true,
    smooth: true,
    offset: SCROLL_OFFSET,
    duration: SCROLL_DURATION,
  };

  return (
    <Drawer
      open={sideBarOpen}
      onClose={toggleDrawer}
      transitionDuration={{ enter: 300, exit: 250 }}
      PaperProps={{ className: classes.drawerPaper }}
    >
      <div className={classes.sidebar}>
        <div className={classes.header}>
          <span className={classes.brand}>Sayooj</span>
          <button
            type="button"
            className={classes.closeButton}
            onClick={toggleDrawer}
            aria-label="Close menu"
          >
            <CloseIcon fontSize="small" />
          </button>
        </div>

        <nav className={classes.nav}>
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              {...linkProps}
              activeClass={classes.active}
              className={classes.navLink}
              onClick={toggleDrawer}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </Drawer>
  );
};

export default Sidebar;
