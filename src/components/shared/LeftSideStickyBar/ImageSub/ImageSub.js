import classes from "./ImageSub.module.css";

const ImageSub = ({ imageURL, link, label }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.link}
      aria-label={label}
    >
      <img src={imageURL} alt="" />
    </a>
  );
};

export default ImageSub;
