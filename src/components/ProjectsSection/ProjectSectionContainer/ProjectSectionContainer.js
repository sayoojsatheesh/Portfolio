// React //
import { useState } from "react";
// Custom //
import ImageConatiner from "../ImageContainer/ImageContainer";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
// MUI //
import { useMediaQuery } from "@mui/material";

const ProjectSectionContainer = ({
  techStack,
  gitlink,
  liveDemoLink,
  heading,
  summaryText,
  imagePath,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const flexDirectionColumn = useMediaQuery("(max-width:1116px)");

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverOut = () => {
    setIsHovered(false);
  };
  return (
    <div
      style={{
        backgroundColor: "rgba(246,246,246,255)",
        width: "90%",
        padding: "20px  35px",
        display: "flex",
        flexDirection: `${flexDirectionColumn ? "column" : ""}`,
        justifyContent: "space-between",
        borderRadius: "10px",
        alignItems: "center",
      }}
    >
      <ImageConatiner
        handleHover={handleHover}
        handleHoverOut={handleHoverOut}
        isHovered={isHovered}
        imagePath={imagePath}
      />
      <ProjectDetails
        handleHover={handleHover}
        handleHoverOut={handleHoverOut}
        summaryText={summaryText}
        heading={heading}
        liveDemoLink={liveDemoLink}
        gitlink={gitlink}
        techStack={techStack}
      />
    </div>
  );
};

export default ProjectSectionContainer;
