import classes from "./ImageContainer.module.css";

const ImageContainer = ({
  imagePath,
  isHovered,
  handleHoverOut,
  handleHover,
  alt,
}) => {
  return (
    <div
      className={classes.imageContainer}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
    >
      <img
        src={imagePath}
        alt={alt}
        className={`${classes.image} ${isHovered ? classes.scrolled : ""}`}
      />
    </div>
  );
};

export default ImageContainer;
