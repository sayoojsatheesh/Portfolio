import classes from "./ProjectDetails.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const ProjectDetails = ({
  tags,
  gitlink,
  liveDemoLink,
  title,
  description,
}) => {
  return (
    <div className={classes.details}>
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.description}>{description}</p>

      <ul className={classes.tags}>
        {tags.map((tag) => (
          <li key={tag} className={classes.tag}>
            {tag}
          </li>
        ))}
      </ul>

      <div className={classes.links}>
        <a
          href={gitlink}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.linkButton}
        >
          <GitHubIcon fontSize="small" />
          Source Code
        </a>
        <a
          href={liveDemoLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`${classes.linkButton} ${classes.linkButtonPrimary}`}
        >
          <LaunchIcon fontSize="small" />
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
