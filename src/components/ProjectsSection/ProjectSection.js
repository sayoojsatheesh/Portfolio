import classes from "./ProjectSection.module.css";
import ProjectSectionContainer from "./ProjectSectionContainer/ProjectSectionContainer";

const projects = [
  {
    imagePath: "/images/CarRental.png",
    title: "Car Rental",
    description:
      "An intuitive car rental platform for searching and reserving vehicles. Built with React for a smooth, responsive booking experience.",
    tags: ["React", "JavaScript", "HTML", "CSS", "Material UI"],
    gitlink: "https://github.com/sayoojsatheesh/car-rental",
    liveDemoLink: "https://car-rental-lovat.vercel.app/",
  },
  {
    imagePath: "/images/ShoesWebsite.png",
    title: "Shoes Store",
    description:
      "A full-stack e-commerce site with product browsing, filters, and sorting. Node.js backend connected to MongoDB for scalable data handling.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JavaScript"],
    gitlink: "https://github.com/sayoojsatheesh/E-commerce",
    liveDemoLink: "https://shoes-store-umber.vercel.app/",
  },
];

const ProjectSection = () => {
  return (
    <section id="project" className={classes.projectSection}>
      <div className="section-inner">
      <header className="section-header">
        <p className="section-eyebrow">Work</p>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-lead">
          A selection of projects showcasing full-stack development, clean UI,
          and production-ready implementations.
        </p>
      </header>

      <div className={classes.projectList}>
        {projects.map((project) => (
          <ProjectSectionContainer key={project.title} {...project} />
        ))}
      </div>
      </div>
    </section>
  );
};

export default ProjectSection;
