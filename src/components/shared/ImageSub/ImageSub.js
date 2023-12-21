import classes from "./ImageSub.module.css";

const ImageSub = ({ imageURL, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className={classes.imageContainerWrapper}>
        <img src={imageURL} />
      </div>
    </a>
  );
};

export default ImageSub;
