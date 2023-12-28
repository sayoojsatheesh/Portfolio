// CSS //
import classes from "./CustomContactCard.module.css";

const CustomContactCard = ({ icon, heading, details }) => {
  return (
    <div className={classes.CustomContactCardMainConatiner}>
      <div className={classes.iconConatiner}>{icon}</div>
      <div>
        <div className={classes.heading}>{heading}</div>
        {heading === "Mail" ? (
          <a href={`mailto:${"sayooj0076@gmail.com"}`}>
            <div className={classes.details}>{details}</div>
          </a>
        ) : (
          <div className={classes.details}>{details}</div>
        )}
      </div>
    </div>
  );
};

export default CustomContactCard;
