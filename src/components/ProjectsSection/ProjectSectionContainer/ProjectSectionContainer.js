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
const isMobile = useMediaQuery("(max-width:1116px)");

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
        minHeight: "420px", 
        padding: "30px 35px",
        margin: "30px auto", 
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        alignItems: "stretch",
        gap: "30px", 
        borderRadius: "12px",
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
