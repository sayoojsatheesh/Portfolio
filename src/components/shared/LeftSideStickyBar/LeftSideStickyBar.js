// CSS //
import classes from "./LeftSideStickyBar.module.css";
// Custom //
import ImageSub from './ImageSub/ImageSub'

const LeftSideStickyBar = () => {
  return (
    <div className={classes.LeftSideStickyBarMainContainer}>
      <ImageSub
        link={"https://www.linkedin.com/in/sayooj-satheesh-44ba2a235/"}
        imageURL={
          "https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg"
        }
      />
      <ImageSub
        link={"https://github.com/sayoojsatheesh"}
        imageURL={
          "https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg"
        }
      />
    </div>
  );
};

export default LeftSideStickyBar;
