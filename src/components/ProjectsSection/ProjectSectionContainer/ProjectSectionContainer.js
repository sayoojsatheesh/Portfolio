import { useState } from "react";
import classes from "./ProjectSectionContainer.module.css";
import ImageContainer from "../ImageContainer/ImageContainer";
import ProjectDetails from "../ProjectDetails/ProjectDetails";

const ProjectSectionContainer = ({
  tags,
  gitlink,
  liveDemoLink,
  title,
  description,
  imagePath,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className={classes.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={classes.imageWrapper}>
        <ImageContainer
          handleHover={() => setIsHovered(true)}
          handleHoverOut={() => setIsHovered(false)}
          isHovered={isHovered}
          imagePath={imagePath}
          alt={`${title} project screenshot`}
        />
      </div>

      <ProjectDetails
        tags={tags}
        gitlink={gitlink}
        liveDemoLink={liveDemoLink}
        title={title}
        description={description}
      />
    </article>
  );
};

export default ProjectSectionContainer;
