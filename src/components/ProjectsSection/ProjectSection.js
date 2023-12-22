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
    <div className={classes.ProjectSectionMainContainer}>
      <h3>Projects</h3>
      <ProjectSectionContainer
        imagePath={"/images/CarRental.png"}
        summaryText={`Car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an
        interface for searching and reserving cars. Created using React`}
        heading={"CAR RENTAL"}
        gitlink={"https://github.com/sayoojsatheesh/car-rental"}
        liveDemoLink="https://car-rental-lovat.vercel.app/"
        techStack={techStackProject1}
      />
      <ProjectSectionContainer
      imagePath={"/images/ShoesWebsite.png"}
        summaryText={`A user-friendly shoe-selling website with extensive options. Users can easily explore a wide array of shoes, apply filters, and utilize sorting features for a personalized shopping experience. Backend operations are managed with Node.js, connected to MongoDB.
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
