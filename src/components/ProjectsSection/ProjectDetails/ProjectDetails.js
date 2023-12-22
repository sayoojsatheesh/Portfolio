// CSS //
import classes from "./ProjectDetails.module.css";
// Custom//
import TechStackInfiniteScroll from "./TechStackInfiniteScroll/TechStackInfiniteScroll";
// MUI //
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const ProjectDetails = ({
  techStack,
  gitlink,
  liveDemoLink,
  heading,
  summaryText,
  handleHoverOut,
  handleHover,
}) => {
  return (
    <div
      className={classes.ProjectDetailsMainContainer}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
    >
      <h4 className={classes.heading}>{heading}</h4>
      <p>{summaryText}</p>
      <TechStackInfiniteScroll techStack={techStack} />
      <div className={classes.bottomLinks}>
        <a href={gitlink} target="_blank" rel="noopener noreferrer">
          <span>
            Code <GitHubIcon fontSize="1.1rem" />
          </span>
        </a>
        <a href={liveDemoLink} target="_blank" rel="noopener noreferrer">
          <span>
            Live Demo <LaunchIcon fontSize="1.1rem" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
