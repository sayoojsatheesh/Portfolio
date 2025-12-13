// CSS
import classes from "./CustomContactCard.module.css";

const CustomContactCard = ({ icon, heading, details, link }) => {
  const card = (
    <div className={classes.card}>
      <div className={classes.icon}>{icon}</div>

      <div className={classes.content}>
        <h4 className={classes.heading}>{heading}</h4>
        <p className={classes.details}>{details}</p>
      </div>
    </div>
  );

  return link ? (
    <a href={link} className={classes.wrapper} target="_blank" rel="noopener noreferrer">
      {card}
    </a>
  ) : (
    card
  );
};

export default CustomContactCard;
