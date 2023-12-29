// CSS /
import classes from "./Contact.module.css";
// Custom //
import CustomContactCard from "./CustomContactCard/CustomContactCard";
// MUI //
import MapIcon from "@mui/icons-material/Map";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  return (
    <div id="contact" className={classes.contactMainContainer}>
      <div className={classes.contactSubContainer}>
        <h3 className={classes.heading}>CONTACT</h3>
        <h2 className={classes.subHeading}>Feel Free to  Hit me up👇</h2>
        <div className={classes.customCardContainer}>
          <CustomContactCard
            icon={<MapIcon  sx={{ color: "#7843e9",fontSize:'2.1rem' }} />}
            heading={"Location"}
            details={"Kerala,India"}
          />
          <CustomContactCard
            icon={<EmailIcon  sx={{ color: "#7843e9",fontSize:'2.1rem' }} />}
            heading={"Mail"}
            details={"sayooj0076@gmail.com"}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
