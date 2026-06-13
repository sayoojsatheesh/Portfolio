import classes from "./CustomContactCard.module.css";

const CustomContactCard = ({ icon, heading, details, link }) => {
  const card = (
    <div className={classes.card}>
      <div className={classes.iconWrapper}>{icon}</div>
      <div className={classes.content}>
        <h3 className={classes.heading}>{heading}</h3>
        <p className={classes.details}>{details}</p>
      </div>
    </div>
  );

  return link ? (
    <a
      href={link}
      className={classes.wrapper}
      target="_blank"
      rel="noopener noreferrer"
    >
      {card}
    </a>
  ) : (
    <div className={classes.wrapper}>{card}</div>
  );
};

export default CustomContactCard;
