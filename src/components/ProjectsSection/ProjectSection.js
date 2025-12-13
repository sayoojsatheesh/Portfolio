// CSS //
import classes from "./ProjectSection.module.css";
// Custom //
import ProjectSectionContainer from "./ProjectSectionContainer/ProjectSectionContainer";

let techStackProject1 = [
  "https://skillicons.dev/icons?i=js",
  "https://skillicons.dev/icons?i=html",
  "https://skillicons.dev/icons?i=css",
  "https://skillicons.dev/icons?i=react",
  "https://skillicons.dev/icons?i=github",
  "https://skillicons.dev/icons?i=materialui",
];

let techStackProject2 = [
  "https://skillicons.dev/icons?i=js",
  "https://skillicons.dev/icons?i=html",
  "https://skillicons.dev/icons?i=css",
  "https://skillicons.dev/icons?i=react",
  "https://skillicons.dev/icons?i=github",
  "https://skillicons.dev/icons?i=materialui",
  "https://skillicons.dev/icons?i=mongodb",
  "https://skillicons.dev/icons?i=nodejs",
  "https://skillicons.dev/icons?i=express",
];

const ProjectSection = () => {
  return (
    <div id="project" className={classes.ProjectSectionMainContainer}>
      <h2 className={classes.sectionTitle}>Projects</h2>
      <ProjectSectionContainer
        imagePath={"/images/CarRental.png"}
        summaryText={`A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an intuitive interface for searching and reserving vehicles. It is built using React.`}
        heading={"CAR RENTAL"}
        gitlink={"https://github.com/sayoojsatheesh/car-rental"}
        liveDemoLink="https://car-rental-lovat.vercel.app/"
        techStack={techStackProject1}
      />
      <ProjectSectionContainer
        imagePath={"/images/ShoesWebsite.png"}
        summaryText={`A user-friendly shoe-selling website offering a wide range of products. Users can easily browse through various shoes, apply filters, and use sorting features for a personalized shopping experience. The backend is built with Node.js and connected to MongoDB.
      `}
        heading={"SHOES STORE"}
        gitlink={"https://github.com/sayoojsatheesh/E-commerce"}
        liveDemoLink="https://shoes-store-umber.vercel.app/"
        techStack={techStackProject2}
      />
    </div>
  );
};

export default ProjectSection;
