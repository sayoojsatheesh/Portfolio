import React, { useState } from "react";
// CSS //
import classes from "./ImageContainer.module.css";

const ImageConatiner = ({
  imagePath,
  isHovered,
  handleHoverOut,
  handleHover,
}) => {
  return (
    <div
      className={`${classes.imagecontainer} ${
        isHovered ? classes.scrolled : ""
      }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
    >
      <img
        src={imagePath}
        alt="Car Rental Screenshot"
        style={{ objectPosition: `${isHovered ? "bottom" : ""}` }}
        className={`${classes.websiteimage} ${classes.scroll}`}
      />
    </div>
  );
};

export default ImageConatiner;
