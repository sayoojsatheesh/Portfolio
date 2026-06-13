import classes from "./LeftSideStickyBar.module.css";
import ImageSub from "./ImageSub/ImageSub";

const socialLinks = [
  {
    link: "https://www.linkedin.com/in/sayooj-satheesh-44ba2a235/",
    label: "LinkedIn",
    imageURL:
      "https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg",
  },
  {
    link: "https://github.com/sayoojsatheesh",
    label: "GitHub",
    imageURL:
      "https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg",
  },
];

const LeftSideStickyBar = () => {
  return (
    <aside className={classes.bar} aria-label="Social links">
      {socialLinks.map(({ link, label, imageURL }) => (
        <ImageSub key={label} link={link} imageURL={imageURL} label={label} />
      ))}
    </aside>
  );
};

export default LeftSideStickyBar;
